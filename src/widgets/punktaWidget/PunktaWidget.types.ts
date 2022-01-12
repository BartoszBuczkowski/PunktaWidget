export interface FormField {
  id: "brands" | "models" | "fuels";
  label: string;
}
export interface Brand {
  make_code: string;
  make_name: string;
}

export interface Fuel {
  fuel_code: string;
  fuel_name: string;
}

export interface Model {
  model_name: string;
}

export interface UseCarsFormAttrs {
  currentBrand: AutocompleteValues | null;
  currentModel: AutocompleteValues | null;
}

export interface AutocompleteValues {
  label: string;
  id: string;
}

export type InitialFields = Record<FormField["id"], AutocompleteValues | null>;

export interface PunktaWidgetListProps {
  widgetInstanceId: string;
}

export interface PunktaWidgetProps extends PunktaWidgetListProps {}
