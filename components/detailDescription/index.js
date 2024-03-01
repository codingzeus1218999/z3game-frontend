import styles from "./style.module.scss";

export default function DetailDescription({ description }) {
  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
}
