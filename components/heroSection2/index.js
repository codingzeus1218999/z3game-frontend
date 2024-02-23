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
import images from "public/images";
import { useEffect, useState } from "react";

const bannerProducts = [
  {
    image: {
      desktop: images.Banner1Desktop,
      mobile: images.Banner1Mobile,
    },
    title: "HELLDIVERS 2 Super Citizen Edition",
    device: "PC",
    price: "59,99",
    link: "/",
  },
  {
    image: {
      desktop: images.Banner2Desktop,
      mobile: images.Banner2Mobile,
    },
    link: "/",
  },
  {
    image: {
      desktop: images.Banner3Desktop,
      mobile: images.Banner3Mobile,
    },
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
  const [isMobile, setIsMobile] = useState(false);
  const calculateMobileVersion = () => {
    if (window.innerWidth < 768) setIsMobile(true);
    else setIsMobile(false);
  };
  useEffect(() => {
    calculateMobileVersion();
    window.addEventListener("resize", calculateMobileVersion);
    return () => {
      window.removeEventListener("resize", calculateMobileVersion);
    };
  }, []);
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
                // style={{
                //   backgroundImage: `url(${
                //     isMobile ? prod.image.mobile.src : prod.image.desktop.src
                //   })`,
                // }}
              >
                <img
                  src={
                    isMobile ? prod.image.mobile.src : prod.image.desktop.src
                  }
                  alt={prod.title}
                />
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
