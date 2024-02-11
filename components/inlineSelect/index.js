import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.scss";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function InlineSelect({ items, value, label, onChangeValue }) {
  return (
    <div className={styles.container}>
      <p>{label}:</p>
      {items.map((item, _idx) => (
        <p
          onClick={() => onChangeValue(item.value)}
          key={_idx}
          className={`${styles.item} ${
            item.value === value ? styles.active : ""
          } hidden md:block`}
        >
          {item.title}
        </p>
      ))}
      <div className="md:hidden relative">
        <p className="text-primary cursor-pointer">
          {items.filter((i) => i.value === value)?.[0]?.title}&nbsp;&nbsp;
          <FontAwesomeIcon icon={faChevronDown} size="sm" />
        </p>
        <select
          className="text-black absolute top-0 left-0 opacity-0 cursor-pointer"
          onChange={({ target }) => onChangeValue(target.value)}
        >
          {items.map((item, _idx) => (
            <option key={_idx} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
