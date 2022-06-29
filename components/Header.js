import Link from 'next/link';
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import { formatCurrency } from '@/lib/utils';
import { Logo } from '@/components/index';
import { ShoppingCartIcon } from '@heroicons/react/solid';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faUser,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { totalPrice, cartCount } = useShoppingCart();

  return (

    //<!-- This example requires Tailwind CSS v2.0+ --> 
    <nav class="sticky top-0 z-50 bg-[#333333] shadow-lg">
      <div class="max-w-screen-2xl  mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/*<!-- Mobile menu button-->*/}
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              {/*<!--
                Icon when menu is closed.
    
                Heroicon name: outline/menu
    
                Menu open: "hidden", Menu closed: "block"
              -->*/}
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/*<!--
                Icon when menu is open.
    
                Heroicon name: outline/x
    
                Menu open: "block", Menu closed: "hidden"
              -->*/}
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <Logo />
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
                <a href="#" class="text-gray-200 hover:text-white px-1 py-2 text-sm font-medium">Playstation</a>
                <a href="#" class="text-gray-200 hover:text-white px-1 py-2 text-sm font-medium">Xbox</a>
                <a href="#" class="text-gray-200 hover:text-white px-1 py-2 text-sm font-medium">Nintendo</a>
                <a href="#" class="text-gray-200 hover:text-white px-1 py-2 text-sm font-medium">Jogos PC</a>
                <a href="#" class="text-gray-200 hover:text-white px-1 py-2 text-sm font-medium">Jogos Mobile</a>
                <a href="#" class="text-gray-200 hover:text-white px-1 py-2 text-sm font-medium">Google Play</a>
                <a href="#" class="text-gray-200 hover:text-white px-1 py-2 text-sm font-medium">Serviços e Entretenimento</a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button" class="inline-block text-gray-200 hover:text-white">
            <FontAwesomeIcon icon={faSearch}/>
					</button>
    

            <div class="ml-3 relative">
              <div>
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
              </div>
    

            </div>
          </div>
        </div>
      </div>
    
    {/*<!-- Mobile menu, show/hide based on menu state. --> */}
      <div class="sm:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          {/*<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->*/}
          <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>
    
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
    
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
    
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
        </div>
      </div>
    
    
    
    {/*
    <header className="sticky top-0 z-50 py-3 border-b bg-[#333333] shadow-lg">
<div class="container max-w-screen-2xl mx-auto px-4">
			<div class="flex flex-wrap items-center">
				<div class="flex-shrink-0 mr-5">
        <Logo />
				</div>

				<div class="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">
					<input class="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" type="text" placeholder="Search" />
					<button type="button" class="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 rounded-md hover:bg-blue-700">
            <FontAwesomeIcon icon={faSearch}/>
					</button>
				</div>
        


				<div class="flex items-center space-x-2 ml-auto">
					<a class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300" href="#"> 
          <FontAwesomeIcon icon={faUser} class="svg-inline--fa fa-user text-gray-400 w-5" />
						<span class="hidden lg:inline ml-1">
              Sign in</span>
					</a>

					<a class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300" href="#"> 
            <FontAwesomeIcon icon={faHeart} class="svg-inline--fa fa-heart text-gray-400 w-5"/>
						<span class="hidden lg:inline ml-1">Wishlist</span> 
					</a>

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
				</div>

				

				<div class="lg:hidden ml-2">
					<button type="button" class="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent">
						<span class="sr-only">Open menu</span>
						<i class="fa fa-bars fa-lg"></i>
					</button>
				</div>


			</div>
		</div> 

    </header>
    */}

</nav>

  );
};

export default Header;
