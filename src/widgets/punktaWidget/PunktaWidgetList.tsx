import { useMemo, useState } from "react";
import { colors, FormField, formFields } from "./PunktaWidget.data";
import useCarsForm from "./hooks/useCarsForm";
import { AutocompleteValues } from "./PunktaWidget.types";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import useStyles from "./hooks/useStyles";

const orderFields: FormField["id"][] = ["brands", "models", "fuels"];
const initialFields: Record<FormField["id"], AutocompleteValues | null> = {
  brands: null,
  fuels: null,
  models: null,
};

function PunktaWidgetList() {
  const classes = useStyles();
  const [fieldsValues, setFieldsValues] = useState(initialFields);

  const { brands, fuels, models, loadingFields } = useCarsForm({
    currentBrand: fieldsValues.brands,
    currentModel: fieldsValues.models,
  });

  const options = useMemo(
    () => ({
      brands: brands?.map(({ make_code, make_name }) => ({
        label: make_name,
        id: make_code,
      })),
      models: models?.map(({ model_name }) => ({
        label: model_name,
        id: model_name,
      })),
      fuels: fuels?.map(({ fuel_code, fuel_name }) => ({
        label: fuel_name,
        id: fuel_code,
      })),
    }),
    [brands, fuels, models]
  );

  const handleFieldsChange = (
    values: AutocompleteValues | null,
    id: FormField["id"]
  ) => {
    let newFieldsValues = fieldsValues;

    if (!values) {
      const currentFieldIndex = orderFields.findIndex((field) => id === field);
      const fieldsToClear = orderFields.slice(currentFieldIndex);

      fieldsToClear.forEach((fieldName) => (newFieldsValues[fieldName] = null));
    }
    console.log(newFieldsValues);
    newFieldsValues[id] = values;
    setFieldsValues({ ...newFieldsValues });
  };

  return (
    <>
      {formFields.map(({ label, id }) => (
        <Autocomplete
          id={id}
          key={label}
          disablePortal
          value={fieldsValues[id]}
          disabled={!options?.[id]}
          options={options?.[id] || []}
          loading={loadingFields[id]}
          onChange={(_, values) => handleFieldsChange(values, id)}
          size="small"
          popupIcon={
            loadingFields[id] && (
              <CircularProgress className={classes.spinner} />
            )
          }
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ background: colors.gray[400] }}
              label={label}
            />
          )}
        />
      ))}
    </>
  );
}

export default PunktaWidgetList;
