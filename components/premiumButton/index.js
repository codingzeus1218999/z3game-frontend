import styles from "./style.module.scss";

export default function PremiumButton({ data }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{data.title}</p>
      <hr />
      <p className={styles.price}>
        {data.moneyUnit} {data.price}
      </p>
      <p className={styles.description}>{data.description}</p>
    </div>
  );
}
