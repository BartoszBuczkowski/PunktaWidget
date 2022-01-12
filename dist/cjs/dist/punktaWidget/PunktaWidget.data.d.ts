import type { CarDataFields, FormField } from "./PunktaWidget.types";
export declare const formFields: FormField[];
export declare const colors: {
    black: string;
    gray: {
        300: string;
        400: string;
    };
    yellow: {
        600: string;
        700: string;
    };
};
export declare const fieldsStatuses: {
    brands: boolean;
    models: boolean;
    fuels: boolean;
};
export declare const requestOptions: {
    headers: {
        Authorization: string;
    };
};
export declare const apiCarsBaseRoute = "https://api-dev.mfind.pl/cars";
export declare const targetPath = "https://punkta.pl/ubezpieczenie-oc-ac/kalkulator-oc-ac";
export declare const orderFields: FormField["id"][];
export declare const initialFields: CarDataFields;
export declare const searchAttributes: {
    brands: string;
    models: string;
    fuels: string;
};
//# sourceMappingURL=PunktaWidget.data.d.ts.map