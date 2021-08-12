import styles from "../../../styles/CheckBox.module.css";
export function CheckBox({ text }) {
  return (
    <div className={styles.container}>
      <input type="checkbox" id={text} value={text} />
      <label htmlFor={text}>{text}</label>
    </div>
  );
}
