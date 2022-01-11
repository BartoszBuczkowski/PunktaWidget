import { makeStyles, createStyles } from "@mui/styles";
import { colors } from "../PunktaWidget.data";

const useStyles = makeStyles(() =>
  createStyles({
    widgetContainer: {
      width: 300,
      height: "fit-content",
      backgroundColor: "white",
    },
    submitButton: {
      backgroundColor: colors.yellow[600],
      color: colors.black,
      borderRadius: "25px",
      "&:hover": {
        backgroundColor: colors.yellow[700],
      },
    },
    listContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "25px",
    },
    buttonContainer: { padding: "25px" },
    spinner: {
      padding: "12px",
    },
  })
);

export default useStyles;
