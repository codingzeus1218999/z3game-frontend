import { useState } from "react";
import { ProductCard } from "@/components/index";

import { loadFeaturedProducts } from "../lib/encapsulated-api";

export default function Home({ products }) {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-2 pt-[120px]">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            disabled={disabled}
            onClickAdd={() => setDisabled(true)}
            onAddEnded={() => setDisabled(false)}
            {...product}
          />
        ))}
      </div>

      <section class="py-20 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">
            Discover our products
          </h2>
          <div class="flex flex-wrap -mx-3 mb-24">
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
              <div class="p-6 bg-gray-50">
                <span class="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                  -15%
                </span>
                <a class="block px-6 mt-6 mb-2" href="#">
                  <img
                    class="mb-5 mx-auto h-56 w-full object-contain"
                    src="https://shuffle.dev/yofte-assets/images/waterbottle.png"
                    alt=""
                  />
                  <h3 class="mb-2 text-xl font-bold font-heading">
                    BRILE water filter
                  </h3>
                  <p class="text-lg font-bold font-heading text-blue-500">
                    <span>$29.89</span>
                    <span class="text-xs text-gray-500 font-semibold font-heading line-through">
                      $33.69
                    </span>
                  </p>
                </a>
                <a
                  class="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                  href="#"
                >
                  <svg
                    width="12"
                    height="12"
                    viewbox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                    <rect
                      x="12"
                      y="5"
                      width="2"
                      height="12"
                      transform="rotate(90 12 5)"
                      fill="#161616"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 lg:mb-0">
              <div class="p-6 bg-gray-50">
                <span class="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
                  -15%
                </span>
                <a class="block px-6 mt-6 mb-2" href="#">
                  <img
                    class="mb-5 mx-auto h-56 w-full object-contain"
                    src="https://shuffle.dev/yofte-assets/images/cycle.png"
                    alt=""
                  />
                  <h3 class="mb-2 text-xl font-bold font-heading">
                    Bicycle S20
                  </h3>
                  <p class="text-lg font-bold font-heading text-blue-500">
                    <span>$14.30</span>
                    <span class="text-xs text-gray-500 font-semibold font-heading line-through">
                      $15.90
                    </span>
                  </p>
                </a>
                <a
                  class="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                  href="#"
                >
                  <svg
                    width="12"
                    height="12"
                    viewbox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                    <rect
                      x="12"
                      y="5"
                      width="2"
                      height="12"
                      transform="rotate(90 12 5)"
                      fill="#161616"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6 md:mb-0">
              <div class="p-6 bg-gray-50">
                <span class="px-2 py-1"></span>
                <a class="block px-6 mt-6 mb-2" href="#">
                  <img
                    class="mb-5 mx-auto h-56 w-full object-contain"
                    src="https://shuffle.dev/yofte-assets/images/basketball.png"
                    alt=""
                  />
                  <h3 class="mb-2 text-xl font-bold font-heading">
                    Nike basketball ball
                  </h3>
                  <p class="text-lg font-bold font-heading text-blue-500">
                    <span>$34.89</span>
                    <span class="text-xs text-gray-500 font-semibold font-heading line-through">
                      $33.69
                    </span>
                  </p>
                </a>
                <a
                  class="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                  href="#"
                >
                  <svg
                    width="12"
                    height="12"
                    viewbox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                    <rect
                      x="12"
                      y="5"
                      width="2"
                      height="12"
                      transform="rotate(90 12 5)"
                      fill="#161616"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 px-3">
              <div class="p-6 bg-gray-50">
                <span class="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 bg-white">
                  NEW
                </span>
                <a class="block px-6 mt-6 mb-2" href="#">
                  <img
                    class="mb-5 mx-auto h-56 w-full object-contain"
                    src="https://shuffle.dev/yofte-assets/images/skateboard.png"
                    alt=""
                  />
                  <h3 class="mb-2 text-xl font-bold font-heading">
                    Kiteboard WH-004
                  </h3>
                  <p class="text-lg font-bold font-heading text-blue-500">
                    <span>$199.90</span>
                    <span class="text-xs text-gray-500 font-semibold font-heading line-through">
                      $33.69
                    </span>
                  </p>
                </a>
                <a
                  class="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
                  href="#"
                >
                  <svg
                    width="12"
                    height="12"
                    viewbox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="5" width="2" height="12" fill="#161616"></rect>
                    <rect
                      x="12"
                      y="5"
                      width="2"
                      height="12"
                      transform="rotate(90 12 5)"
                      fill="#161616"
                    ></rect>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a
              class="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase"
              href="#"
            >
              Show More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const products = await loadFeaturedProducts();

  return {
    props: { products },
    revalidate: 10,
  };
}
