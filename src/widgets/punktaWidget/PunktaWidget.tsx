import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useLocalStorage from "./hooks/useLocalStorage";
import useStyles from "./hooks/useStyles";
import { initialFields } from "./PunktaWidget.data";
import { PunktaWidgetProps } from "./PunktaWidget.types";
import PunktaWidgetHeader from "./PunktaWidgetHeader";
import PunktaWidgetList from "./PunktaWidgetList";

const theme = createTheme();

function PunktaWidget({ widgetInstanceId }: PunktaWidgetProps) {
  const { storedValue, setValue } = useLocalStorage(
    widgetInstanceId,
    initialFields
  );

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box component="section" className={classes.widgetContainer}>
        <PunktaWidgetHeader />

        <Box className={classes.listContainer}>
          <PunktaWidgetList
            fieldsValues={storedValue}
            setFieldsValues={setValue}
          />
        </Box>

        <Box className={classes.buttonContainer}>
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
