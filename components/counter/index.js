import { useState } from "react";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlug, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Counter({ maxCount }) {
  const [count, setCount] = useState(0);
  const onChangeCount = (c) => {
    let t = Number(c) || 0;
    setCount(t > maxCount ? maxCount : t);
  };
  const onClickButton = (delta) => {
    let t = count + delta;
    setCount(t > maxCount ? maxCount : t < 0 ? 0 : t);
  };
  return (
    <div className={styles.container}>
      <div className={styles.button} onClick={() => onClickButton(-1)}>
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <input
        className={styles.input}
        value={count}
        onChange={(e) => onChangeCount(e.target.value)}
      />
      <div className={styles.button} onClick={() => onClickButton(1)}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
}
