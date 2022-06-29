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
    
    <header className="bg-white py-3 border-b">

<div class="container max-w-screen-xl mx-auto px-4">
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
            
						<span class="hidden lg:inline ml-1">
              <FontAwesomeIcon icon={faUser} class="svg-inline--fa fa-user text-gray-400 w-5" />
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
  );
};

export default Header;
