import Image from "next/image";
import styles from "../../../styles/NavItem.module.css";

import listsImg from "../../../assets/icons/lista.png";

export function NavItem({ text, icon, active }) {
  return (
    <div className={styles.container}>
      <div className={styles.active}>
        <Image src={icon.src} width={18} height={14} />
      </div>
      <p>{text}</p>
    </div>
  );
}
