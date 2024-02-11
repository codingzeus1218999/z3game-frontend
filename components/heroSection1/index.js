import Image from "next/image";

import styles from "./style.module.scss";
import images from "public/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection1() {
  return (
    <div className={styles.container}>
      <div className="al-container flex justify-center md:justify-start">
        <div className="flex flex-col items-center">
          <Image src={images.CarnaGamer} alt="carna-gamer" />
          <p className="font-bold text-3xl uppercase mt-2">
            over 2000 games up to 95% off!
          </p>
          <p className="mt-5 bg-[#26324180] p-2 rounded-[3px] font-bold text-sm">
            <FontAwesomeIcon icon={faClock} /> 05D 18:29:02
          </p>
          <div className="al-button-primary mt-3 w-[300px] text-center py-2 font-bold uppercase z-10">
            check it out
          </div>
        </div>
      </div>
    </div>
  );
}
