import { useMemo, useState } from "react";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { colors, FormField, formFields } from "./PunktaWidget.data";
import PunktaWidgetHeader from "./PunktaWidgetHeader";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useCarsForm from "./hooks/useCarsForm";
import useStyles from "./hooks/useStyles";
import { AutocompleteValues } from "./PunktaWidget.types";

const theme = createTheme();
const orderFields: FormField["id"][] = ["brands", "models", "fuels"];
const initialFields: Record<FormField["id"], AutocompleteValues | null> = {
  brands: null,
  fuels: null,
  models: null,
};

function PunktaWidget() {
  const [fieldsValues, setFieldsValues] = useState(initialFields);

  const { brands, fuels, models, loadingFields } = useCarsForm({
    currentBrand: fieldsValues.brands,
    currentModel: fieldsValues.models,
  });

  const classes = useStyles();

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
      console.log({ fieldsToClear });

      fieldsToClear.forEach((fieldName) => (newFieldsValues[fieldName] = null));
    }
    console.log(newFieldsValues);
    newFieldsValues[id] = values;
    setFieldsValues({ ...newFieldsValues });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        sx={{
          width: 300,
          height: "fit-content",
          backgroundColor: "white",
        }}
      >
        <PunktaWidgetHeader />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "25px",
          }}
        >
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
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ background: colors.gray[400] }}
                  label={label}
                />
              )}
            />
          ))}
        </Box>

        <Box sx={{ padding: "25px" }}>
          <Button
            fullWidth
            variant="contained"
            className={classes.submitButton}
            endIcon={<ArrowForwardIcon />}
          >
            Oblicz składkę
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default PunktaWidget;
