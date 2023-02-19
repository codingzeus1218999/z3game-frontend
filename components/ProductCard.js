import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { useShoppingCart } from 'use-shopping-cart';
import { formatCurrency } from '@/lib/utils';
import { Rating } from '@/components/index';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
library.add(fas,fab, far);


const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


const ProductCard = props => {
  const { cartCount, addItem } = useShoppingCart();
  const [adding, setAdding] = useState(false);

  const toastId = useRef();
  const firstRun = useRef(true);


  const handleOnAddToCart = event => {
    event.preventDefault();

    setAdding(true);
    toastId.current = toast.loading('Adding 1 item...');

    if (typeof props.onClickAdd === 'function') {
      props.onClickAdd();
    }

    addItem(props);
  };

  useEffect(() => {
    async function fetchData() {
      if (firstRun.current) {
        firstRun.current = false;
        return;
      }

      await sleep(1000);

      if (adding) {
        setAdding(false);
        toast.success(`${props.name} added`, {
          id: toastId.current,
        });
      }

      if (typeof props.onAddEnded === 'function') {
        props.onAddEnded();
      }
    }
    fetchData();
  }, [cartCount]);

  return (
    <Link legacyBehavior href={`/products/${props.id}`}>
      <a className="border rounded-md p-2 group">
        {/* Product's image */}
        <div className="relative w-full h-32 group-hover:transform group-hover:scale-110 group-hover:ease-in-out group-hover:duration-300">
          <Image
            src={props.image}
            alt={props.name}
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Name + Rating */}
        <div className="mt-2">
          <p className="py-2 h-10 max-h-10 font-medium text-gray-600 group-hover:text-yellow-500">{props.name}</p>
          {/* <Rating rate={props?.rating?.rate} count={props?.rating?.count} /> */}
        </div>

        {/* Price + CTA */}
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            {props.onSale ?
              <p className="text-gray-500 line-through">{formatCurrency(props.salePrice, props.currency)}</p>
              :
              ''
            }
            <p className="text-lg font-semibold">
              {formatCurrency(props.price, props.currency)}
            </p>

          </div>
          {props.onSale ?
            <div className="px-4 py-2 inline-block text-white border border-transparent bg-yellow-500 rounded-md">
              <p className="text-xl font-bold">
              -{props.saleDiscount}%
              </p>
            </div>
            :
            ''
          }
          <button
            type="button"
            onClick={handleOnAddToCart}
            disabled={adding || props.disabled}
            className={`mt-1 border rounded-lg py-2 px-5 text-xl hover:text-white bg-gray-100 hover:bg-gray-800 hover:border-gray-800  transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
              adding
                ? 'disabled:bg-yellow-500 disabled:border-rose-500 disabled:text-white'
                : 'disabled:hover:bg-transparent disabled:hover:text-current disabled:hover:border-gray-200'
            }`}
          >
            {adding ? '...' :
            
            <FontAwesomeIcon icon={['far', 'square-plus']} />
            
            
            // <Image src="/icons/add-shopping-cart.svg" alt="Logo" width={28} height={28} />
            }
          </button>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
