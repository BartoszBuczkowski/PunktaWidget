import type { FormField, InitialFields } from "./PunktaWidget.types";

export const formFields: FormField[] = [
  { id: "brands", label: "Marka" },
  { id: "models", label: "Model" },
  { id: "fuels", label: "Typ paliwa" },
];

export const colors = {
  black: "black",
  gray: {
    300: "#F5F5F5",
    400: "#ededed",
  },
  yellow: {
    600: "#FFCC00",
    700: "#d8ad00",
  },
};

export const fieldsStatuses = {
  brands: false,
  models: false,
  fuels: false,
};

export const requestOptions = {
  headers: { Authorization: "Basic YXV0a2FfYXBpOmF1dGthX2FwaV8yMDE5" },
};

export const apiCarsBaseRoute = "https://api-dev.mfind.pl/cars";

export const orderFields: FormField["id"][] = ["brands", "models", "fuels"];
export const initialFields: InitialFields = {
  brands: null,
  fuels: null,
  models: null,
};
