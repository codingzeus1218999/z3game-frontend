import { useEffect, useState } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import styles from "./style.module.scss";
import { calculateDurationFormat } from "utils/datetime";
import {
  faCartPlus,
  faHeart as faHeartFilled,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function ProductCard({ product }) {
  const [toEndingTime, setToEndingTime] = useState("00D 00:00:00");
  const [isHoverFavourite, setIsHoverFavourite] = useState(false);

  useEffect(() => {
    setInterval(() => {
      let currentTime = moment();
      setToEndingTime(calculateDurationFormat(currentTime, product.endtime));
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={product.image} alt={product.title} />
        <div
          className={`${styles.favourite} ${
            product.favourite ? "" : "opacity-0"
          }`}
          onMouseEnter={() => setIsHoverFavourite(true)}
          onMouseLeave={() => setIsHoverFavourite(false)}
        >
          <FontAwesomeIcon
            icon={
              product.favourite
                ? isHoverFavourite
                  ? faHeart
                  : faHeartFilled
                : isHoverFavourite
                ? faHeartFilled
                : faHeart
            }
          />
        </div>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.title}>{product.title}</p>
        <div className={styles.device}>
          {product.device === "windows" ? (
            <FontAwesomeIcon icon={faWindows} />
          ) : (
            ""
          )}
        </div>
        <p className={styles.toendingtime}>{toEndingTime}</p>
        <div className={styles.priceContainer}>
          <div className={styles.reducedPro}>{product.reducedPro} %</div>
          <div className={styles.price}>
            <span>
              <FontAwesomeIcon icon={faCartPlus} />
            </span>
            &nbsp;
            {product.unit}&nbsp;
            {product.price}
          </div>
        </div>
      </div>
    </div>
  );
}
