import { createContext, useState } from "react";

export const CheckboxContext = createContext();

export function CheckBoxProvider({ children }) {
  const [checkBoxValues, setCheckBoxValues] = useState([]);

  return (
    <CheckboxContext.Provider value={{ checkBoxValues, setCheckBoxValues }}>
      {children}
    </CheckboxContext.Provider>
  );
}
