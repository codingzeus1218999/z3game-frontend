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
  
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if(!menuOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  }





  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowCartPreview(false);
    }, 1000);
  };

  useEffect(() => {
    function handler(event) {
        if(cartPreviewRef.current && !cartPreviewRef.current?.contains(event.target)) {
            setShowCartPreview(false);
        }
        //setMenuOpen(false);
    }
    window.addEventListener('mousedown', handler)
    return () => window.removeEventListener('mousedown', handler)
}, [])


  return (
    <>
    <header className="py-3 border-b fixed top-0 w-full z-50 bg-[#333333]">

    <div class="container max-w-screen-xl mx-auto px-4">
			<div class="flex flex-wrap items-center">
				{/* <!-- mobile-only --> */}
				{/* <div class="lg:hidden ml-2">
					<button type="button" class="p-1 pr-4 -ml-4 inline-flex items-center rounded-md text-black hover:text-gray-800 border border-transparent">
            <Bars4Icon className="w-10 text-white hover:text-gray-300 " />
					</button>
				</div> */}
        <div className="mr-2 flex items-center lg:hidden">
          <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
            <svg className={`${menuOpen ? 'hidden' : 'block'} h-9 w-9`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`${menuOpen ? 'block' : 'hidden'} h-9 w-9`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
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
				<div class="flex items-center space-x-6 ml-auto" >
					<button  type="button" data-collapse-toggle="user-dropdown"  aria-controls="mobile-menu-3" aria-expanded="false"> 
            <UserCircleIcon className="w-7 -mt-1 text-white hover:text-gray-300 "/>
					</button>

          <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
          </div>


          <a href="#" class=""> 
            <HeartIcon className="w-7 -mt-1 text-white hover:text-gray-300 " />
					</a>


          <div class="relative items-center space-x-2 ml-auto" onClick={toggleCartPreview} >
            <a href="#" class=""> 
              <div>
                <ShoppingCartIcon className=" w-7 h-9 -mt-1 text-white hover:text-gray-300 " />
                <div class="absolute -top-2 -right-1">
                  <div class="flex items-center justify-center h-5 w-5 bg-yellow-500 rounded-full text-white text-xs">
                    <span>{cartCount}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
				</div>
        {showCartPreview && <div onMouseLeave={handleMouseLeave} ref={cartPreviewRef} ><CartPreview   /></div>}
				{/* <!-- Actions .//end --> */}

			</div> 
        {/* <!-- flex grid //end --> */}
		</div>
      {/* <!-- container //end --> */}

    </header>
    <nav class="hidden lg:flex mt-[66px] border-b bg-[#404041] text-white">
      <div class="container max-w-screen-xl mx-auto px-1">
        {/* <!-- menu --> */}
        <nav class="hidden lg:flex flex-1 items-center py-1">
          <a class="px-3 py-2 rounded-md hover:bg-[#0071e3]" href="#"> Catálogo </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> Playstation </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> Xbox </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> Nintendo </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> Jogos PC </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> Jogos Mobile </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> Google Play </a>
          <a class="px-5 py-2 rounded-md hover:bg-blue-500" href="#"> Serviços e Entretenimento </a>
        </nav>
        {/* <!-- menu //end --> */}
      </div>
	</nav>
  <div className={`${menuOpen ? 'z-50 absolute top-[137px]' : 'hidden'} lg:hidden`}>

      <div class="flex items-center bg-gray-100 w-screen h-screen">
        <div class="flex w-full h-full p-4 bg-gray-800 ">







        <div className="w-full max-w-xs mx-auto">
          <div className="rounded-lg shadow-lg bg-white overflow-hidden">
            <div
              className="flex items-center justify-between p-4 cursor-pointer select-none"
              onClick={toggleAccordion}
            >
              <span>Accordion Menu</span>
              <svg
                className={`w-6 h-6 ${isOpen ? 'transform rotate-90' : ''}`}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.41 7.41L10.83 6l6 6-6 6-1.42-1.41L14.01 12l-4.6-4.59z"
                />
              </svg>
            </div>
            {isOpen && (
              <div className="animate-slide-down">
                <ul className="bg-gray-100 py-2">
                  <li className="px-4 py-2">Item 1</li>
                  <li className="px-4 py-2">Item 2</li>
                  <li className="px-4 py-2">Item 3</li>
                </ul>
              </div>
            )}
          </div>
        </div>













          <ul class="flex flex-col w-full ">
            <li class="my-px">
              <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">My Orders</span>
            </li>
            <li class="my-px">
              <a href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span class="flex items-center justify-center text-lg text-gray-500">
                  <svg fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
                </span>
                <span class="ml-3">Manager</span>
              </a>
            </li>
            <li class="my-px">
              <a href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span class="flex items-center justify-center text-lg text-gray-500">
                  <svg fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </span>
                <span class="ml-3">Tasks</span>
              </a>
            </li>
            <li class="my-px">
              <a href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span class="flex items-center justify-center text-lg text-gray-500">
                  <svg fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </span>
                <span class="ml-3">Clients</span>
                <span class="flex items-center justify-center text-sm text-gray-500 font-semibold bg-gray-300 h-6 px-2 rounded-full ml-auto">1k</span>
              </a>
            </li>
            <li class="my-px">
              <a href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span class="flex items-center justify-center text-lg text-green-400">
                  <svg fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
                <span class="ml-3">Add new</span>
              </a>
            </li>
            <li class="my-px">
              <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Account</span>
            </li>
            <li class="my-px">
              <a href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span class="flex items-center justify-center text-lg text-gray-500">
                  <svg fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </span>
                <span class="ml-3">Profile</span>
              </a>
            </li>
            <li class="my-px">
              <a href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span class="flex items-center justify-center text-lg text-gray-500">
                  <svg fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                </span>
                <span class="ml-3">Notifications</span>
                <span class="flex items-center justify-center text-sm text-red-500 font-semibold bg-red-300 h-6 px-2 rounded-full ml-auto">10</span>
              </a>
            </li>
            <li class="my-px">
              <a href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span class="flex items-center justify-center text-lg text-gray-500">
                  <svg fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                <span class="ml-3">Settings</span>
              </a>
            </li>
            <li class="my-px">
              <a href="#"
                class="flex flex-row items-center h-12 px-4 rounded-lg text-gray-500 hover:bg-gray-700">
                <span class="flex items-center justify-center text-lg text-red-400">
                  <svg fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                  </svg>
                </span>
                <span class="ml-3">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
