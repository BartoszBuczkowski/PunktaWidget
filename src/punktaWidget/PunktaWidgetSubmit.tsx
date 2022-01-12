import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button } from "@mui/material";
import useStyles from "./hooks/useStyles";
import { searchAttributes, targetPath } from "./PunktaWidget.data";
import type {
  PunktaWidgetSubmitProps,
  SearchAttributesKeys,
} from "./PunktaWidget.types";

function PunktaWidgetSubmit({ fieldsValues }: PunktaWidgetSubmitProps) {
  const classes = useStyles();

  const handleSubmit = () => {
    const pathAttributes: string[] = [];

    Object.entries(fieldsValues).forEach(([key, value]) => {
      if (!value?.label) return;
      pathAttributes.push(
        `${[searchAttributes[key as SearchAttributesKeys]]}=${value?.label}`
      );
    });

    const link = `${targetPath}?${pathAttributes.join("&")}`;
    return (window.location.href = link);
  };

  return (
    <Box className={classes.buttonContainer}>
      <Button
        fullWidth
        variant="contained"
        className={classes.submitButton}
        endIcon={<ArrowForwardIcon />}
        onClick={handleSubmit}
      >
        Oblicz składkę
      </Button>
    </Box>
  );
}

export default PunktaWidgetSubmit;
