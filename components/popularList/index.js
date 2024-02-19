import Link from "next/link";
import PopularCard from "../popularCard";
import styles from "./style.module.scss";

export default function PopularList({ list }) {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p className={styles.title}>Most Popular</p>
        <Link href="/">
          <div className="al-button-primary rounded-none whitespace-nowrap">
            view more
          </div>
        </Link>
      </div>
      <div className={styles.cardsContainer}>
        {list.map((l, _idx) => (
          <PopularCard product={l} key={_idx} number={_idx + 1} />
        ))}
      </div>
    </div>
  );
}
