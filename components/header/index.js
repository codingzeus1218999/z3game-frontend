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
  { image: images.IconPlaystation, title: "Playstatiion" },
  { image: images.IconXBox, title: "Xbox" },
  { image: images.IconNintendo, title: "Nintendo" },
];

const Header = () => {
  const [isMagnifyHover, setIsMagnifyHover] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [searchStr, setSearchStr] = useState("");
  const searchInputRef = useRef(null);

  const onMouseEnterMagnifyContainer = () => setIsMagnifyHover(true);
  const onMouseLeaveMagnifyContainer = () => setIsMagnifyHover(false);
  const onClickMagnify = () => {
    setIsOpenSearch(true);
    searchInputRef.current.focus();
  };
  const onClickCloseSearch = () => setIsOpenSearch(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <div>
          <Link href="/">
            <Image src={images.Logo} alt="logo" width={40} height={40} />
          </Link>
        </div>
        <div className={styles.productMenu}>
          {menu.map((m, _idx) => (
            <div key={_idx}>
              <MenuItem {...m} />
            </div>
          ))}

          <div
            className={styles.magnifyContainer}
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
            placeholder="Minecraft, RPG, multiplayer..."
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
              searchStr ? "block" : "hidden"
            }`}
          />
        </div>
        <div className={styles.headerRight}>
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
    </header>
  );
};

export default Header;
