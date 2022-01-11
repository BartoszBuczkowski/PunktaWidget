import { Box, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PunktaWidgetHeader from "./PunktaWidgetHeader";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useStyles from "./hooks/useStyles";
import PunktaWidgetList from "./PunktaWidgetList";

const theme = createTheme();

function PunktaWidget() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box component="section" className={classes.widgetContainer}>
        <PunktaWidgetHeader />

        <Box className={classes.listContainer}>
          <PunktaWidgetList />
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
