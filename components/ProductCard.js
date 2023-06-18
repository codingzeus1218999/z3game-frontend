import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { useShoppingCart } from 'use-shopping-cart';
import { formatCurrency } from '@/lib/utils';
import { Rating } from '@/components/index';
import { PlusIcon, ArrowPathIcon } from '@heroicons/react/24/outline';



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

      // this await is just to simulate back-end query
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
    <Link href={`/products/${props.friendlyURL}`} className="border rounded-md p-2 group">
      <div className="relative w-full h-36 ">
        {/* Product's image */}

          {props.onSale ?
            <span className="text-center z-10 relative inline-block  py-1 w-[50px] -my-1 -mx-1 border-2 text-sm font-bold bg-red-600 border-white  text-white rounded-full left-3 top-5">
            -{props.saleDiscount}%
          </span>
            :
            ''
          }
        <div className={`relative ${props.onSale ? '-my-6' : ''} w-full h-36 group-hover:transform group-hover:scale-110 group-hover:ease-in-out group-hover:duration-300`}>

          <Image
            src={props.imgName}
            alt={props.name}
            fill
            style={{ objectFit: 'contain' }}
            className="z-0"
          />
          
        </div>
        </div>
        {/* Name + Rating */}
        <div className="mt-2">
          <p className="text-xs sm:text-lg py-2 h-10 max-h-10 font-medium text-gray-600 group-hover:text-yellow-500">{props.name}</p>
          {/* <Rating rate={props?.rating?.rate} count={props?.rating?.count} /> */}
        </div>

        {/* Price + CTA */}
        <div className="mt-5 flex items-center justify-between space-x-2">
          <div>
            {props.onSale ?
              <p className="text-xs sm:text-sm font-semibold text-gray-500 line-through">{formatCurrency(props.salePrice, props.currency)}</p>
              :
              ''
            }
            <p className="animate-shake text-sm sm:text-xl font-heading font-bold text-gray-700">
              {formatCurrency(props.price, props.currency)}
            </p>

          </div>
          <button
            type="button"
            onClick={handleOnAddToCart}
            disabled={adding || props.disabled}
            className={`border rounded-lg py-2 px-2 sm:px-3 sm:py-2 text-xl  hover:border-gray-800  transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
              adding
                ? 'disabled:bg-yellow-500 disabled:border-rose-500 disabled:text-white'
                : 'disabled:hover:bg-transparent disabled:hover:text-current disabled:hover:border-gray-200'
            }`}
          >
            {adding ? <ArrowPathIcon className="w-4 sm:w-6" /> :
            
            <PlusIcon className="w-4 sm:w-6" />
            
            
            // <Image src="/icons/add-shopping-cart.svg" alt="Logo" width={28} height={28} />
            }
          </button>
        </div>

    </Link>
  );
};

export default ProductCard;
