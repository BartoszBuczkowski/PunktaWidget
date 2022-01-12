import { useState } from "react";
import { AutocompleteValues, InitialFields } from "../PunktaWidget.types";

function useLocalStorage(key: string, initialValue: InitialFields) {
  const storageName = `Punkta_${key}`;

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(storageName);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: AutocompleteValues | null) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(storageName, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
