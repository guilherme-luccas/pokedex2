import Image from "next/image";
import styles from "../../../styles/NavItem.module.css";

type NavItemProps = {
  text: string;
  icon: { src: string };
};

export function NavItem({ text, icon }: NavItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.active}>
        <Image src={icon.src} width={18} height={14} />
      </div>
      <p>{text}</p>
    </div>
  );
}
