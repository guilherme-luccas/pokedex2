import { useContext } from "react";
import { CheckboxContext } from "../../CheckboxContext";
import styles from "../../../styles/CheckBox.module.css";

type CheckBoxProps = {
  text: string;
};

export function CheckBox({ text }: CheckBoxProps) {
  const { setCheckBoxValues, checkBoxValues } = useContext(CheckboxContext);

  const updatedCheckBoxValues = [...checkBoxValues];

  function PushValues(e: string) {
    const index = updatedCheckBoxValues.indexOf(e);

    if (updatedCheckBoxValues.includes(e)) {
      updatedCheckBoxValues.splice(index, 1);
    } else {
      updatedCheckBoxValues.push(e);
    }
    setCheckBoxValues(updatedCheckBoxValues);
  }

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        id={text}
        value={text}
        onChange={(e) => PushValues(e.target.value)}
      />
      <label htmlFor={text}>{text}</label>
    </div>
  );
}
