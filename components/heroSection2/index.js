import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const bannerProducts = [
  {
    image:
      "https://images.greenmangaming.com/7775f4bd63e44531bd0372bca44b3228/528ba945d0c94598bb3fbde1a89bbcb3.jpg",
    title: "HELLDIVERS 2 Super Citizen Edition",
    device: "PC",
    price: "59,99",
    link: "/",
  },
  {
    image:
      "https://images.greenmangaming.com/100adbed07f147fc8c3f1a74542a8e9a/9f053513a5c243a2a0f1746b220a9b18.jpg",
    link: "/",
  },
  {
    image:
      "https://images.greenmangaming.com/cec6ffe5519a434a8d27732c77c9ff5f/b0ace05f2d234abf8560320dfb9aac22.jpg",
    link: "/",
  },
  {
    image:
      "https://images.greenmangaming.com/4bae2918003141efb9e19868f79142c9/f7b16a5a01ff4174837b2d552dcc7b5c.jpg",
    link: "/",
  },
  {
    image:
      "https://images.greenmangaming.com/cbfab49eb9b448f882940f1491eced5e/76c637cddf004460bd3518ad4b50a927.jpg",
    title: "Tomb Raider I-III Remastered",
    device: "PC",
    price: "26,09",
    originalPrice: "28,99",
    reducedPro: "-10",
    date: "FEB 14 2024",
    link: "/",
  },
  {
    image:
      "https://images.greenmangaming.com/3f43093f433a46cc8579975f45d83859/74c396c15beb4e7d8e9fd3af02ca09ab.jpg",
    title: "The Expanse: A Telltale Series",
    device: "PC",
    price: "18,38",
    originalPrice: "24,50",
    reducedPro: "-25",
    link: "/",
  },
  {
    image:
      "https://images.greenmangaming.com/1335701411914eeebdb2afeed2a03c5d/81cae21f579941159fe742260c90371b.jpg",
    title: "Dragon Fist: VR Kung Fu",
    device: "PC",
    price: "19,50",
    link: "/",
  },
  {
    image:
      "https://images.greenmangaming.com/3f43093f433a46cc8579975f45d83859/74c396c15beb4e7d8e9fd3af02ca09ab.jpg",
    title: "Dragon's Dogma 2",
    device: "PC",
    price: "53,29",
    originalPrice: "64,99",
    reducedPro: "-18",
    date: "MAR 22 2024",
    link: "/",
  },
  {
    image:
      "https://images.greenmangaming.com/b7689d20c0af4b1c8303a7451928b6d0/0b8a73b9c7f646cda6285d428750bb7c.jpg",
    title: "Banishers: Ghosts of New Eden",
    device: "PC",
    price: "41,99",
    originalPrice: "49,99",
    reducedPro: "-16",
    date: "13th Feb",
    link: "/",
  },
];

export default function HeroSection2() {
  return (
    <div className={styles.container}>
      <div className="max-w-[1536px] w-full mx-auto relative pb-14">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          loop={true}
          autoplay={{ delay: 5000 }}
        >
          {bannerProducts.map((prod, _idx) => (
            <SwiperSlide key={_idx}>
              <Link
                href={prod.link}
                className={styles.swiperSlide}
                style={{ backgroundImage: `url(${prod.image})` }}
              >
                {!prod.title && (
                  <div
                    href={prod.link}
                    className="al-button-secondary mx-auto mb-10"
                  >
                    view more
                  </div>
                )}
                {prod.title && (
                  <div className="bg-black">
                    <div className={styles.attributes}>
                      <div>
                        <p className={styles.title}>{prod.title}</p>
                        <p className={styles.device}>{prod.device}</p>
                      </div>
                      <div className="flex gap-4 items-center justify-between lg:justify-end">
                        <div className="flex gap-3 items-center">
                          {prod.reducedPro && (
                            <p className={styles.reducedPro}>
                              {prod.reducedPro} %
                            </p>
                          )}
                          <div>
                            {prod.originalPrice && (
                              <p className={styles.originalPrice}>
                                {prod.originalPrice} $
                              </p>
                            )}
                            <p className={styles.price}>{prod.price} $</p>
                          </div>
                        </div>
                        <div className="al-button-secondary">
                          <FontAwesomeIcon icon={faCartShopping} /> &nbsp;&nbsp;
                          add to cart
                        </div>
                      </div>
                      {prod.date && <p className={styles.date}>{prod.date}</p>}
                    </div>
                  </div>
                )}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <div className="swiper-button-prev al-button-swiper-navigator"></div>
          <div className="swiper-button-next al-button-swiper-navigator"></div>
        </div>
        <div className="swiper-pagination al-swiper-pagination"></div>
      </div>
    </div>
  );
}
