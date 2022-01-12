import { useState } from "react";
import { CarDataFields } from "../PunktaWidget.types";

function useLocalStorage(key: string, initialValue: CarDataFields) {
  const storageName = `Punkta_${key}`;

  const [storedValue, setStoredValue] = useState<CarDataFields>(() => {
    try {
      const item = window.localStorage.getItem(storageName);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: CarDataFields) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(storageName, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  return { storedValue, setValue };
}

export default useLocalStorage;
