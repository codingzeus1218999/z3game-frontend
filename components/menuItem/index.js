import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import styles from "./style.module.scss";

const MenuItem = ({ image = "", title = "" }) => {
  return (
    <div className="text-white">
      <Image src={image} alt={title} />
      {title}
    </div>
  );
};

export default MenuItem;
