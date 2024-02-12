import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "./style.module.scss";

const bannerProducts = [
  {
    image:
      "https://images.greenmangaming.com/7775f4bd63e44531bd0372bca44b3228/528ba945d0c94598bb3fbde1a89bbcb3.jpg",
    title: "HELLDIVERS 2 Super Citizen Edition",
    device: "PC",
    price: "59,99",
  },
  {
    image:
      "https://images.greenmangaming.com/100adbed07f147fc8c3f1a74542a8e9a/9f053513a5c243a2a0f1746b220a9b18.jpg",
  },
  {
    image:
      "https://images.greenmangaming.com/cec6ffe5519a434a8d27732c77c9ff5f/b0ace05f2d234abf8560320dfb9aac22.jpg",
  },
  {
    image:
      "https://images.greenmangaming.com/4bae2918003141efb9e19868f79142c9/f7b16a5a01ff4174837b2d552dcc7b5c.jpg",
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
  },
  {
    image:
      "https://images.greenmangaming.com/3f43093f433a46cc8579975f45d83859/74c396c15beb4e7d8e9fd3af02ca09ab.jpg",
    title: "The Expanse: A Telltale Series",
    device: "PC",
    price: "18,38",
    originalPrice: "24,50",
    reducedPro: "-25",
  },
  {
    image:
      "https://images.greenmangaming.com/1335701411914eeebdb2afeed2a03c5d/81cae21f579941159fe742260c90371b.jpg",
    title: "Dragon Fist: VR Kung Fu",
    device: "PC",
    price: "19,50",
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
  },
];

export default function HeroSection2() {
  return (
    <div className={styles.container}>
      <div className="al-container">
        <Swiper slidesPerView={1}>
          {bannerProducts.map((prod, _idx) => (
            <SwiperSlide key={_idx}>
              <div
                className={styles.swiperSlide}
                style={{ backgroundImage: `url(${prod.image})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
