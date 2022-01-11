/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";
import {
  apiCarsBaseRoute,
  fieldsStatuses,
  requestOptions,
} from "../PunktaWidget.data";
import { Brand, Fuel, Model, UseCarsFormAttrs } from "../PunktaWidget.types";

function useCarsForm({ currentBrand, currentModel }: UseCarsFormAttrs) {
  const [loadingFields, setLoadingFields] = useState(fieldsStatuses);
  const [error, setError] = useState(null);
  const [brands, setBrands] = useState<Brand[] | undefined>(undefined);
  const [models, setModels] = useState<Model[] | undefined>(undefined);
  const [fuels, setFuels] = useState<Fuel[] | undefined>(undefined);

  useMemo(async () => {
    setLoadingFields({ ...loadingFields, brands: true });

    await fetch(apiCarsBaseRoute, requestOptions)
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => setError(error));

    setLoadingFields({ ...loadingFields, brands: false });
  }, []);

  useMemo(async () => {
    if (!currentBrand) return;

    setLoadingFields({ ...loadingFields, models: true });

    await fetch(
      `${apiCarsBaseRoute}/${currentBrand.label}/models`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setModels(data))
      .catch((error) => setError(error));

    setLoadingFields({ ...loadingFields, models: false });
  }, [currentBrand]);

  useMemo(async () => {
    if (!currentModel || !currentBrand) return;

    setLoadingFields({ ...loadingFields, fuels: true });

    await fetch(
      `${apiCarsBaseRoute}/${currentBrand.label}/models/${currentModel.label}/fuels/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setFuels(data))
      .catch((error) => setError(error));

    setLoadingFields({ ...loadingFields, fuels: false });
  }, [currentModel]);

  return { brands, models, fuels, error, loadingFields };
}

export default useCarsForm;
