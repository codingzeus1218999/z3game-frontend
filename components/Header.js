import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';
import { formatCurrency } from '@/lib/utils';
import { Logo } from '@/components/index';
import CartPreview from './CartPreview';
import React, { useState, useRef, useEffect } from 'react';
import { UserCircleIcon, ShoppingCartIcon, Bars4Icon, HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';



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
      
      console.log('Mouse clicked inside');
    } else {
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
    <>
    <header className="bg-white py-3 border-b fixed top-0 w-full z-50 bg-[#333333]">

    <div class="container max-w-screen-xl mx-auto px-4">
			<div class="flex flex-wrap items-center">
				{/* <!-- mobile-only --> */}
				<div class="lg:hidden ml-2">
					<button type="button" class="p-1 pr-4 -ml-4 inline-flex items-center rounded-md text-black hover:text-gray-800 border border-transparent">
            <Bars4Icon className="w-10 text-white hover:text-gray-300 " />
					</button>
				</div>
				{/* <!-- mobile-only //end  --> */}

				{/* <!-- Brand --> */}
				<div class="flex-shrink-0 mr-5">
          <Logo />
				</div>
				{/* <!-- Brand .//end --> */}
				
				{/* <!-- Search --> */}
				<div class="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
					<input class="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" type="text" placeholder="Search"/>
					<button type="button" class="px-3 py-2 inline-block border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md hover:bg-blue-100">
          <MagnifyingGlassIcon className="w-6 text-[#333333]" />
					</button>
				</div>
				{/* <!-- Search .//end --> */}

				{/* <!-- Actions --> */}
				<div class="flex items-center space-x-2 ml-auto">
					<a href="#" class=""> 
            <UserCircleIcon className="w-9 -mt-1 text-white hover:text-gray-300 " />
					</a>

          <a href="#" class=""> 
            <HeartIcon className="w-9 -mt-1 text-white hover:text-gray-300 " />
					</a>


          <div class="relative items-center space-x-2 ml-auto" onClick={toggleCartPreview} >
            <a href="#" class=""> 
              <div>
                <ShoppingCartIcon className="w-9 h-9 -mt-1 text-white hover:text-gray-300 " />
                <div class="absolute -top-1 -right-1">
                  <div class="flex items-center justify-center h-5 w-5 bg-yellow-500 rounded-full text-white text-xs">
                    <span>{cartCount}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
				</div>
        {showCartPreview && <div onMouseLeave={handleMouseLeave} ><CartPreview ref={cartPreviewRef}  /></div>}
				{/* <!-- Actions .//end --> */}

			</div> 
        {/* <!-- flex grid //end --> */}
		</div>
      {/* <!-- container //end --> */}



    </header>
    <nav class="hidden lg:flex mt-[66px] border-b bg-blue-600 text-white">
      <div class="container max-w-screen-xl mx-auto px-1">
        {/* <!-- menu --> */}
        <nav class="hidden lg:flex flex-1 items-center py-1">
          <a class="px-3 py-2 rounded-md hover:bg-blue-500" href="#"> Catálogo </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> About </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> Services </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> Projects </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> Offers </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> Others </a>
        </nav>
        {/* <!-- menu //end --> */}
      </div>
	</nav>
    </>
  );
};

export default Header;
