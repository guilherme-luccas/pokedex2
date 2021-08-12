import styles from "../../../styles/CheckBox.module.css";
export function CheckBox({ text }) {
  return (
    <div className={styles.container}>
      <input type="checkbox" id={text} />
      <label htmlFor="">{text}</label>
    </div>
  );
}
