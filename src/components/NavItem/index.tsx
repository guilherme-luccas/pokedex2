import Image from "next/image";
import styles from "../../../styles/NavItem.module.css";

type NavItemProps = {
  text: string;
  icon: { src: string };
  active: boolean;
};

export function NavItem({ text, icon, active }: NavItemProps) {
  return (
    <div className={styles.container}>
      <div className={active ? styles.active : styles.normal}>
        <Image src={icon.src} width={18} height={14} />
      </div>
      <p>{text}</p>
    </div>
  );
}
