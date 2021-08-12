import { createContext, useState } from "react";

type CheckBoxProviderProps = {
  children: React.ReactNode;
};
type CheckboxContextData = {
  checkBoxValues: [];
  setCheckBoxValues: React.ReactNode;
};

export const CheckboxContext = createContext<CheckboxContextData>(
  {} as CheckboxContextData
);

export function CheckBoxProvider({ children }: CheckBoxProviderProps) {
  const [checkBoxValues, setCheckBoxValues] = useState<[]>([]);

  return (
    <CheckboxContext.Provider value={{ checkBoxValues, setCheckBoxValues }}>
      {children}
    </CheckboxContext.Provider>
  );
}
