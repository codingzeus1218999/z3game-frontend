import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import styles from "./style.module.scss";
import images from "public/images";
import { calculateDurationFormat } from "utils/datetime";

const endTime = "2024-03-10 08:00:00";
export default function HeroSection1() {
  const [toEndingTime, setToEndingTime] = useState("00D 00:00:00");
  useEffect(() => {
    setInterval(() => {
      let currentTime = moment();
      setToEndingTime(calculateDurationFormat(currentTime, endTime));
    }, 1000);
  }, []);

  return (
    <Link href="/">
      <div className={styles.container}>
        <div className="al-container flex justify-center md:justify-start">
          <div className="flex flex-col items-center">
            <Image src={images.CarnaGamer} alt="carna-gamer" />
            <p className="font-bold text-3xl uppercase mt-2">
              over 2000 games up to 95% off!
            </p>
            <p className="mt-5 bg-[#26324180] p-2 rounded-[3px] font-bold text-sm">
              <FontAwesomeIcon icon={faClock} /> {toEndingTime}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
