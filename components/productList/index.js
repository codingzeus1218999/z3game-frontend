import Link from "next/link";
import styles from "./style.module.scss";
import ProductCard from "../productCard";
import ProductBanner from "../productBanner";
import { useEffect, useState } from "react";

export default function ProductList({ list }) {
  const [displayCount, setDisplayCount] = useState(5);
  const [isGrid, setIsGrid] = useState(false);

  const calculateDisplayCount = () => {
    if (window.innerWidth < 544) {
      setDisplayCount(4);
      setIsGrid(true);
    } else if (window.innerWidth < 768) {
      setDisplayCount(3);
      setIsGrid(false);
    } else if (window.innerWidth < 1024) {
      setDisplayCount(4);
      setIsGrid(false);
    } else {
      setDisplayCount(5);
      setIsGrid(false);
    }
  };

  useEffect(() => {
    calculateDisplayCount();
    window.addEventListener("resize", calculateDisplayCount);
    return () => {
      window.removeEventListener("resize", calculateDisplayCount);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div>
          <p className={styles.title}>{list.title}</p>
          <p className={styles.description}>{list.description}</p>
        </div>
        <Link href="/">
          <div className="al-button-primary rounded-none whitespace-nowrap">
            view more
          </div>
        </Link>
      </div>
      <div
        className={`${styles.cardsContainer} ${
          isGrid ? "grid grid-cols-2 grid-rows-2" : "flex justify-between"
        }`}
      >
        {list.products.slice(0, displayCount).map((p, _idx) => (
          <ProductCard product={p} key={_idx} />
        ))}
      </div>
      {list?.banner && (
        <div className={styles.bannerContainer}>
          <ProductBanner info={list.banner} />
        </div>
      )}
    </div>
  );
}
