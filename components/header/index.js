import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import images from "public/images";
import variables from "@/styles/variables.module.scss";
import styles from "./style.module.scss";

import {
  BackspaceIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "../menuItem";
import MenuItemMobile from "../menuItemMobile";

const iconAnimation = {
  initial: { color: "#ffffff" },
  whileHover: { color: variables.primaryColor },
  transition: { duration: 0.2 },
};

const magnifyIconAnimation = {
  variants: {
    hover: { scale: 1.3 },
    init: { scale: 1.0 },
  },
  transition: {
    duration: 0.4,
  },
};

const searchInputAnimation = {
  variants: {
    show: { scaleX: 1, opacity: 1 },
    hidden: { scaleX: 0, opacity: 0 },
  },
  transition: {
    type: "spring",
    duration: 0.4,
  },
};

const menu = [
  { image: images.IconComputerDesktop, title: "PC" },
  { image: images.IconPlaystation, title: "PlayStation" },
  { image: images.IconXBox, title: "Xbox" },
  { image: images.IconNintendo, title: "Nintendo" },
  { image: images.IconDevicePhoneMobile, title: "Mobile" },
  { image: images.IconGift, title: "Gift Cards" },
];

const subMenu = [
  [
    "Steam COdigo Digital",
    "Blizzard - Battle.Net",
    "League of Legends RP",
    "Valorant - Riot",
  ],
  [
    "Playstation Store Brasil",
    "Playstation Store Estados Unidos",
    "Playstation Store PT",
    "Playstation Store UK",
  ],
  ["xbox game1", "xbox game2", "xbox game3", "xbox game4"],
  ["nintendo game1", "nintendo game2", "nintendo game3", "nintendo game4"],
  ["mobile game1", "mobile game2", "mobile game3", "mobile game4"],
  ["Gift 1", "Gift 2", "Gift 3", "Gift 4"],
];

const Header = () => {
  const [isMagnifyHover, setIsMagnifyHover] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [searchStr, setSearchStr] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const searchInputRef = useRef(null);
  const productMenuRef = useRef(null);
  const productMenuMobileRef = useRef(null);
  const subMenuRef = useRef(null);

  useEffect(() => {
    if (activeMenu !== null) {
      document.querySelector("body").classList.add("panel-open");
    }
  }, [activeMenu]);

  useEffect(() => {
    subMenuRef.current.style.top = `${
      productMenuMobileRef.current.clientHeight + 58
    }px`;
    window.addEventListener("resize", (e) => {
      subMenuRef.current.style.top = `${
        productMenuMobileRef.current.clientHeight + 58
      }px`;
    });
    document.addEventListener("click", (e) => {
      if (
        !productMenuRef.current.contains(e.srcElement) &&
        !productMenuMobileRef.current.contains(e.srcElement)
      )
        setActiveMenu(null);
    });
  }, []);

  const onMouseEnterMagnifyContainer = () => setIsMagnifyHover(true);
  const onMouseLeaveMagnifyContainer = () => setIsMagnifyHover(false);
  const onClickMagnify = () => {
    setIsOpenSearch(true);
    searchInputRef.current.focus();
    setActiveMenu(null);
  };
  const onClickCloseSearch = () => setIsOpenSearch(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerSubContainer}>
        <div className={`${styles.header} al-container`}>
          <div className={`${isOpenSearch ? "hidden lg:block" : "block"}`}>
            <Link href="/">
              <Image src={images.Logo} alt="logo" width={40} height={40} />
            </Link>
          </div>
          <div
            className={`${styles.productMenu} ${
              isOpenSearch ? "w-[calc(100%-30px)] lg:w-fit" : "w-fit"
            }`}
            ref={productMenuRef}
          >
            {menu.map((m, _idx) => (
              <div
                key={_idx}
                onClick={() => {
                  setActiveMenu(_idx);
                }}
                className="hidden lg:block"
              >
                <MenuItem {...m} isActive={_idx === activeMenu} />
              </div>
            ))}
            <div
              className={`${styles.magnifyContainer} ${
                activeMenu !== null ? styles.active : ""
              }`}
              onMouseEnter={onMouseEnterMagnifyContainer}
              onMouseLeave={onMouseLeaveMagnifyContainer}
              onClick={onClickMagnify}
            >
              <motion.div
                animate={isMagnifyHover ? "hover" : "init"}
                {...magnifyIconAnimation}
              >
                <MagnifyingGlassIcon className="w-5 text-white" />
              </motion.div>
            </div>
            <motion.input
              animate={isOpenSearch ? "show" : "hidden"}
              className={styles.searchInput}
              {...searchInputAnimation}
              ref={searchInputRef}
              value={searchStr}
              onChange={({ target }) => setSearchStr(target.value)}
              placeholder="Minecraft, Playstation Gift Card, Valorant Points..."
            ></motion.input>
            <motion.div
              {...iconAnimation}
              animate={
                isOpenSearch
                  ? { opacity: 1, display: "block" }
                  : { opacity: 0, transitionEnd: { display: "none" } }
              }
              className={styles.crossIcon}
              onClick={onClickCloseSearch}
            >
              <XMarkIcon className="w-5" />
            </motion.div>
            <BackspaceIcon
              onClick={() => {
                setSearchStr("");
                searchInputRef.current.focus();
              }}
              className={`${styles.removeSearchStrIcon} ${
                searchStr && isOpenSearch ? "block" : "hidden"
              }`}
            />
            <div
              className={`${styles.subMenu} ${
                activeMenu === null ? "" : styles.active
              }`}
              ref={subMenuRef}
            >
              {activeMenu !== null &&
                subMenu[activeMenu].map((s, _idx) => (
                  <div key={_idx} className={styles.item}>
                    {s}
                  </div>
                ))}
            </div>
          </div>
          <div
            className={`${styles.headerRight} ${
              isOpenSearch ? "hidden lg:flex" : "flex"
            } `}
          >
            <Link href="/">
              <motion.div {...iconAnimation}>
                <ShoppingCartIcon className="w-7" />
              </motion.div>
            </Link>
            <Link href="/">
              <motion.div {...iconAnimation}>
                <UserCircleIcon className="w-7" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.productMenuMobile} ref={productMenuMobileRef}>
        {menu.map((m, _idx) => (
          <div
            key={_idx}
            onClick={() => {
              setActiveMenu(_idx);
            }}
          >
            <MenuItemMobile {...m} isActive={_idx === activeMenu} />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
