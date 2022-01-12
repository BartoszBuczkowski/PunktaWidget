import { Brand, Fuel, Model, UseCarsFormAttrs } from "../PunktaWidget.types";
declare function useCarsForm({ currentBrand, currentModel }: UseCarsFormAttrs): {
    brands: Brand[] | undefined;
    models: Model[] | undefined;
    fuels: Fuel[] | undefined;
    error: null;
    loadingFields: {
        brands: boolean;
        models: boolean;
        fuels: boolean;
    };
};
export default useCarsForm;
//# sourceMappingURL=useCarsForm.d.ts.map