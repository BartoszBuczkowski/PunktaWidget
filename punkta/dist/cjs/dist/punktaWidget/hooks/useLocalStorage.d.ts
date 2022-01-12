import { CarDataFields } from "../PunktaWidget.types";
declare function useLocalStorage(key: string, initialValue: CarDataFields): {
    storedValue: CarDataFields;
    setValue: (value: CarDataFields) => void;
};
export default useLocalStorage;
//# sourceMappingURL=useLocalStorage.d.ts.map