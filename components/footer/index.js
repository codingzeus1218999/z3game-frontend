import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import variables from "@/styles/variables.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebookSquare,
  faWhatsappSquare,
  faTwitter,
  faTiktok,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import styles from "./style.module.scss";
import images from "public/images";
import InlineSelect from "../inlineSelect";
import { useState } from "react";

const linkPages = [
  { link: "/", title: "Buying Jorney" },
  { link: "/", title: "Contact us" },
  { link: "/", title: "F.A.Q." },
  { link: "/", title: "Submit your game" },
  { link: "/", title: "Blog" },
];

const linkPagesSecond = [
  { link: "/", title: "About Us" },
  { link: "/", title: "Legal" },
  { link: "/", title: "Privacy policy" },
  { link: "/", title: "Cookie Declaration" },
];

const languages = [
  { value: "english", title: "English" },
  { value: "portuguese", title: "Português" },
  { value: "spanish", title: "Español" },
];

const currencies = [
  { value: "eur", title: "EUR" },
  { value: "usd", title: "USD" },
];

const pageLinkAnimation = {
  initial: { color: "#ffffff" },
  whileHover: { color: variables.primaryColor },
  transition: { duration: 0.2 },
};

export default function Footer() {
  const [language, setLanguage] = useState("english");
  const [currency, setCurrency] = useState("usd");

  return (
    <footer className={styles.footerContainer}>
      <div className={`${styles.firstSection} al-container`}>
        <div className={styles.pages}>
          {linkPages.map((l, _idx) => (
            <Link href={l.link} key={_idx}>
              <motion.p {...pageLinkAnimation} className={styles.pageLink}>
                {l.title}
              </motion.p>
            </Link>
          ))}
        </div>
        <div className={styles.socials}>
          <Link href="/">
            <motion.div {...pageLinkAnimation}>
              <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
            </motion.div>
          </Link>
          <Link href="/">
            <motion.div {...pageLinkAnimation}>
              <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
            </motion.div>
          </Link>
          <Link href="/">
            <motion.div {...pageLinkAnimation}>
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </motion.div>
          </Link>
          <Link href="/">
            <motion.div {...pageLinkAnimation}>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </motion.div>
          </Link>
          <Link href="/">
            <motion.div {...pageLinkAnimation}>
              <FontAwesomeIcon icon={faWhatsappSquare} size="lg" />
            </motion.div>
          </Link>
          <Link href="/">
            <motion.div {...pageLinkAnimation}>
              <FontAwesomeIcon icon={faYoutubeSquare} size="lg" />
            </motion.div>
          </Link>
          <Link href="/">
            <motion.div {...pageLinkAnimation}>
              <FontAwesomeIcon icon={faWhatsappSquare} size="lg" />
            </motion.div>
          </Link>
        </div>
      </div>
      <div className={styles.secondSection}>
        <div className={`${styles.section} al-container`}>
          <div className="flex items-center gap-6">
            <Link href="/" className="hidden lg:block">
              <Image src={images.Logo1} height={40} alt="logo" />
            </Link>
            <div className="flex flex-row justify-between md:flex-col flex-1">
              <InlineSelect
                items={languages}
                value={language}
                label="Language"
                onChangeValue={(v) => setLanguage(v)}
              />
              <InlineSelect
                items={currencies}
                value={currency}
                label="Currency"
                onChangeValue={(v) => setCurrency(v)}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between flex-wrap gap-2">
            <div className="al-button-primary flex items-center gap-3">
              <FontAwesomeIcon icon={faDownload} />
              <div>
                <p className="font-bold">Download Z3G App</p>
                <p className="text-xs font-bold">for mobile</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:hidden">
              <Link href="/">
                <motion.div {...pageLinkAnimation}>
                  <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div {...pageLinkAnimation}>
                  <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div {...pageLinkAnimation}>
                  <FontAwesomeIcon icon={faTiktok} size="lg" />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div {...pageLinkAnimation}>
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div {...pageLinkAnimation}>
                  <FontAwesomeIcon icon={faYoutubeSquare} size="lg" />
                </motion.div>
              </Link>
              <Link href="/">
                <motion.div {...pageLinkAnimation}>
                  <FontAwesomeIcon icon={faWhatsappSquare} size="lg" />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.thirdSection} al-container`}>
        <div className="flex flex-col gap-4 md:gap-1">
          <div className="flex gap-3 justify-center md:justify-start flex-wrap">
            {linkPagesSecond.map((l, _idx) => (
              <Link href={l.link} key={_idx}>
                <p className="transition-all hover:text-primary whitespace-nowrap">
                  {l.title}
                </p>
              </Link>
            ))}
          </div>
          <p className="text-center md:text-left">
            © Z3G sp. z o.o. All rights reserved. All trademarks and registered
            trademarks are the property of their respective owners.
          </p>
        </div>
        <div className="font-semibold whitespace-nowrap">
          Part of <span className="text-white font-extrabold">Z3 games </span>
          group.
        </div>
      </div>
    </footer>
  );
}
