import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart as faHeartFilled,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "./style.module.scss";

export default function ProductBanner({ info }) {
  const [isHoverFavourite, setIsHoverFavourite] = useState(false);

  return (
    <div className={styles.container}>
      <img src={info.image} alt="ad game" />
      <div className={styles.btnGroup}>
        <div className={styles.reducedPro}>{info.reducedPro} %</div>
        <div className={styles.price}>
          <span>
            <FontAwesomeIcon icon={faCartPlus} />
            &nbsp;
          </span>
          {info.unit}&nbsp;
          {info.price}
        </div>
        <div
          className={styles.favourite}
          onMouseEnter={() => setIsHoverFavourite(true)}
          onMouseLeave={() => setIsHoverFavourite(false)}
        >
          <FontAwesomeIcon
            icon={
              info.favourite
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
    </div>
  );
}
