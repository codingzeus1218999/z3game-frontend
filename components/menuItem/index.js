import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import styles from "./style.module.scss";

const MenuItem = ({ image = "", title = "", isActive = false }) => {
  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
      <Image src={image} alt={title} width={15} />
      {title}
      <motion.div>
        <ChevronDownIcon className={styles.chevrondown} />
      </motion.div>
    </div>
  );
};

export default MenuItem;
