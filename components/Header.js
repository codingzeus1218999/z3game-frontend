import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';
import { formatCurrency } from '@/lib/utils';
import { Logo } from '@/components/index';
import CartPreview from './CartPreview';
import React, { useState, useRef, useEffect } from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(fas,fab);



const Header = () => {
  const {cartCount } = useShoppingCart();

  const [showCartPreview, setShowCartPreview] = useState(false);

  const cartPreviewRef = useRef(null);
  const timeoutRef = useRef(null);

  const toggleCartPreview = () => setShowCartPreview(!showCartPreview);



  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCartPreview(false);
    }, 1000);
  };

  const handleOutsideClick = (event) => {
    console.log('Mouse clicked');
    if (cartPreviewRef.current && !cartPreviewRef.current.contains(event.target)) {
      setShowCartPreview(false);
    } 
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);


  return (
    
    <header className="bg-white py-3 border-b">

<div class="container max-w-screen-xl mx-auto px-4">
			<div class="flex flex-wrap items-center">
				{/* <!-- Brand --> */}
				<div class="flex-shrink-0 mr-5">
          <Logo />
				</div>
				{/* <!-- Brand .//end --> */}
				
				{/* <!-- Search --> */}
				<div class="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
					<input class="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" type="text" placeholder="Search"/>
					<button type="button" class="px-4 py-2 inline-block text-blue-600 border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md hover:bg-blue-100">
            <FontAwesomeIcon icon={['fas', 'search']}/>
					</button>
				</div>
				{/* <!-- Search .//end --> */}

				{/* <!-- Actions --> */}
				<div class="flex items-center space-x-2 ml-auto">
					<a class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300" href="#"> 
            
						<span class="hidden lg:inline ml-1">
              <FontAwesomeIcon icon={faUser} class="svg-inline--fa fa-user text-gray-400 w-5" />
              Sign in</span>
					</a>

					<a class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300" href="#"> 
            <FontAwesomeIcon icon={['fas', 'heart']}  className="text-gray-400 w-5"/>
						<span class="hidden lg:inline ml-1">Wishlist</span> 
					</a>


        <div class="relative" onClick={toggleCartPreview} ref={cartPreviewRef}>
					<a class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300" href="#"> 

            
            <FontAwesomeIcon icon={['fas', 'shopping-cart']}  className="text-gray-400 w-5"/>
              <div class="absolute top-0 right-0">
                <div class="flex items-center justify-center h-4 w-4 bg-yellow-500 rounded-full text-white text-xs">
                  <span>{cartCount}</span>
                </div>
              </div>
            

						
					</a>
          {showCartPreview && <div onMouseLeave={handleMouseLeave} ><CartPreview  /></div>}
          </div>
				</div>
				{/* <!-- Actions .//end --> */}
				
				{/* <!-- mobile-only --> */}
				<div class="lg:hidden ml-2">
					<button type="button" class="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent">
						<span class="sr-only">Open menu</span>
            <FontAwesomeIcon icon={['fas', 'bars']}  />
					</button>
				</div>
				{/* <!-- mobile-only //end  --> */}

			</div>
		</div> 







      {/* <div className="container xl:max-w-screen-xl mx-auto p-6 flex justify-between">
        <Logo />
        <Link href="/cart">
          <a className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
            <div className="relative">
              <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
            </div>
            <p className="text-lg">
              {formatCurrency(totalPrice)}{' '}
              <span className="text-sm text-gray-500">({cartCount})</span>
            </p>
          </a>
        </Link>
      </div> */}


    </header>
    */}

</nav>

  );
};

export default Header;
