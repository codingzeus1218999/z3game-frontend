import { useState } from "react";
import {
  faCartPlus,
  faHeart as faHeartFilled,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./style.module.scss";
import {
  faAndroid,
  faApple,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

export default function PopularCard({ product, number }) {
  const [isHoverFavourite, setIsHoverFavourite] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <span>{number}</span>
      </div>
      <div className={styles.cardContainer}>
        <div
          className={styles.favourite}
          onMouseEnter={() => setIsHoverFavourite(true)}
          onMouseLeave={() => setIsHoverFavourite(false)}
        >
          <FontAwesomeIcon
            size="lg"
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
        <div className={styles.image}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.infos}>
          <p className={styles.title}>{product.title}</p>
          <div className={styles.device}>
            {product.device.map((d, _idx) => (
              <FontAwesomeIcon
                key={_idx}
                icon={
                  d === "windows"
                    ? faWindows
                    : d === "android"
                    ? faAndroid
                    : d === "apple"
                    ? faApple
                    : null
                }
              />
            ))}
          </div>
        </div>
        <div className={styles.price}>
          <span>
            <FontAwesomeIcon icon={faCartPlus} />
            &nbsp;
          </span>
          {product.unit}&nbsp;
          {product.price}
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.devide}></div>
        <div className={styles.prices}>
          <p className={styles.price}>
            {product.unit} {product.price}
          </p>
          <div className={styles.buy}>
            <FontAwesomeIcon icon={faCartPlus} /> BUY
          </div>
        </div>
      </div>
    </div>
  );
}
