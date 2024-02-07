import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import { formatCurrency } from "@/lib/utils";
import { Logo } from "@/components/index";
import CartPreview from "../CartPreview";
import React, { useState, useRef, useEffect } from "react";
import {
  GiftIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ChevronDownIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  Bars4Icon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import PlaystationIcon from "../PlaystationIcon";
import XboxIcon from "../XboxIcon";
import NintendoIcon from "../NintendoIcon";
import styles from "./style.module.scss";

const Header = () => {
  const { cartCount } = useShoppingCart();

  const [showCartPreview, setShowCartPreview] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const cartPreviewRef = useRef(null);
  const timeoutRef = useRef(null);

  const toggleCartPreview = () => setShowCartPreview(!showCartPreview);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    console.log("Toogle search: " + showSearch);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  };

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
    const onScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    function handler(event) {
      if (
        cartPreviewRef.current &&
        !cartPreviewRef.current?.contains(event.target)
      ) {
        setShowCartPreview(false);
      }
      //setMenuOpen(false);
    }

    window.addEventListener("mousedown", handler);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className="py-3 border-b fixed top-0 w-full z-20 bg-[#333333]">
        <div class="container max-w-screen-xl mx-auto px-4">
          <div class="flex flex-wrap items-center">
            {/* <!-- mobile-only --> */}
            {/* <div class="lg:hidden ml-2">
					<button type="button" class="p-1 pr-4 -ml-4 inline-flex items-center rounded-md text-black hover:text-gray-800 border border-transparent">
            <Bars4Icon className="w-10 text-white hover:text-gray-300 " />
					</button>
				</div> */}

            {/* old hamburguer menu */}
            {/* <div className="mr-2 flex items-center lg:hidden">
          <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
            <svg className={`${menuOpen ? 'hidden' : 'block'} h-9 w-9`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`${menuOpen ? 'block' : 'hidden'} h-9 w-9`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div> */}

            {/* <!-- mobile-only //end  --> */}

            {/* <!-- Brand --> */}
            <div class="flex-shrink-0 mr-5 px-2 z-30">
              <Logo />
            </div>
            {/* <!-- Brand .//end --> */}

            {/* <!-- new menu --> */}

            <div
              class={
                (showSearch ? " z-30 md:z-20	" : "") +
                " top-1.5 lg:top-auto absolute w-full lg:w-[735px] left-1/2 -translate-x-1/2 lg:flex lg:flex-col transition-all"
              }
            >
              <div class="flex items-center w-full">
                <div class="flex-col-reverse flex lg:flex-row w-full ">
                  <div
                    className={
                      "mt-2 h-6 lg:mt-0 lg:h-auto text-white text-xs items-center justify-center opacity-70 bg-[#333333] lg:text-base lg:opacity-100 lg:mt-0  flex md:" +
                      (showSearch ? " lg:hidden" : "") +
                      " " +
                      (isScrolled ? "lg:flex hidden" : "")
                    }
                  >
                    <div className="pl-2">
                      <a href="#" className="group">
                        <div class="flex ">
                          <ComputerDesktopIcon className="hidden lg:flex w-7 pr-2" />
                          <span class="pr-0.5">PC</span>
                          <ChevronDownIcon className="group-hover:text-white text-gray-400 w-2 sm:w-4" />
                        </div>
                      </a>
                    </div>

                    <div className="pl-2">
                      <a href="#" className="group">
                        <div class="flex">
                          <PlaystationIcon className="w-7 pr-2 hidden lg:flex" />
                          <span class="pr-0.5">Playstation</span>
                          <ChevronDownIcon className="group-hover:text-white text-gray-400 w-2 sm:w-4" />
                        </div>
                      </a>
                    </div>

                    <div className="pl-2">
                      <a href="#" className="group">
                        <div class="flex">
                          <XboxIcon className="w-7 pr-2 hidden lg:flex" />
                          <span class="pr-0.5">Xbox</span>
                          <ChevronDownIcon className="group-hover:text-white text-gray-400 w-2 sm:w-4" />
                        </div>
                      </a>
                    </div>

                    <div className="pl-2">
                      <a href="#" className="group">
                        <div class="flex">
                          <NintendoIcon className="w-7 pr-2 hidden lg:flex" />
                          <span class="pr-0.5">Nintendo</span>
                          <ChevronDownIcon className="group-hover:text-white text-gray-400 w-2 sm:w-4" />
                        </div>
                      </a>
                    </div>

                    <div className="pl-2">
                      <a href="#" className="group">
                        <div class="flex">
                          <DevicePhoneMobileIcon className="w-7 pr-2 hidden lg:flex" />
                          <span class="pr-0.5">Mobile</span>
                          <ChevronDownIcon className="group-hover:text-white text-gray-400 w-2 sm:w-4" />
                        </div>
                      </a>
                    </div>

                    <div className="px-2">
                      <a href="#" className="group">
                        <div class="flex">
                          <GiftIcon className="w-7 pr-2 hidden lg:flex" />
                          <span class="pr-0.5">Gift Cards</span>
                          <ChevronDownIcon className="group-hover:text-white text-gray-400 w-2 sm:w-4" />
                        </div>
                      </a>
                    </div>
                  </div>

                  <div
                    className={
                      (showSearch ? "w-full" : "") +
                      " flex px-2 justify-center bg-[#333333] "
                    }
                  >
                    <div
                      className={
                        (showSearch ? "w-full" : "") +
                        " pl-2 pr-1 flex text-white justify-center"
                      }
                    >
                      <div
                        className={
                          (showSearch
                            ? "w-[310px] lg:w-[670px]"
                            : "w-[50px] justify-center") +
                          " items-center h-[50px]  flex -mx-4 text-sm font-bold bg-orange-600 rounded-full "
                        }
                      >
                        <div
                          className={
                            (showSearch ? "w-[88%] lg:w-[94%]" : "hidden") +
                            " flex px-2"
                          }
                        >
                          <input
                            type="text"
                            className="focus:outline-none w-full text-white bg-orange-600"
                          ></input>
                        </div>
                        <div className="cursor-pointer lg:hover:scale-125 hover:ease-in-out hover:duration-300">
                          <MagnifyingGlassIcon
                            className="w-6 "
                            onClick={toggleSearch}
                          />
                        </div>
                      </div>
                      <div
                        onClick={toggleSearch}
                        className={
                          (showSearch
                            ? "cursor-pointer hover:text-orange-600	text-lg translate-x-6 items-center"
                            : "hidden") + " flex"
                        }
                      >
                        {" "}
                        X
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- new menu .//end --> */}

            {/* <!-- Actions --> */}
            <div class="z-20 flex items-center space-x-4 ml-auto">
              <button
                type="button"
                data-collapse-toggle="user-dropdown"
                aria-controls="mobile-menu-3"
                aria-expanded="false"
              >
                <UserCircleIcon className="w-7 text-white hover:text-gray-300 " />
              </button>

              <div
                class="hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                    name@flowbite.com
                  </span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>

              <div
                class="relative items-center space-x-2 ml-auto "
                onClick={toggleCartPreview}
              >
                <a href="#" class="">
                  <div>
                    <ShoppingCartIcon className=" w-7 h-9 text-white hover:text-gray-300 " />
                    <div class="absolute -top-1 -right-1">
                      <div class="flex items-center justify-center h-5 w-5 bg-orange-600 rounded-full text-white text-xs">
                        <span>{cartCount}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {showCartPreview && (
              <div onMouseLeave={handleMouseLeave} ref={cartPreviewRef}>
                <CartPreview />
              </div>
            )}
            {/* <!-- Actions .//end --> */}
          </div>
          {/* <!-- flex grid //end --> */}
        </div>
        {/* <!-- container //end --> */}
      </header>
    </>
  );
};

export default Header;
