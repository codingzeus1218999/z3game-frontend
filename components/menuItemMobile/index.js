import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import styles from "./style.module.scss";

const MenuItemMobile = ({ title = "", isActive = false }) => {
  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
      {title}
      <motion.div>
        <ChevronDownIcon className={styles.chevrondown} />
      </motion.div>
    </div>
  );
};

export default MenuItemMobile;
