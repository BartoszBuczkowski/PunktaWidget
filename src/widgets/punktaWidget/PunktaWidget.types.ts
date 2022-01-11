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
