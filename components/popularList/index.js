import PopularCard from "../popularCard";
import styles from "./style.module.scss";

export default function PopularList({ list }) {
  return (
    <div className={styles.container}>
      {list.map((l, _idx) => (
        <PopularCard product={l} key={_idx} number={_idx + 1} />
      ))}
    </div>
  );
}
