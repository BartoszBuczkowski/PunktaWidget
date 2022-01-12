import { makeStyles, createStyles } from "@mui/styles";
import { colors } from "../PunktaWidget.data";

const useStyles = makeStyles(() =>
  createStyles({
    widgetContainer: {
      width: 300,
      height: "fit-content",
      backgroundColor: "white",
    },
    headerContainer: {
      position: "relative",
      height: 210,
      overflow: "hidden",
    },
    headerCircle: {
      height: 400,
      width: 350,
      bottom: 0,
      left: "50%",
      display: "block",
      borderRadius: "50%",
      position: "absolute",
      backgroundColor: "#F5F5F5",
      transform: "translateX(-50%)",
    },
    headerContentBox: {
      zIndex: 1,
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      gap: "30px",
      flexDirection: "column",
      justifyContent: "center",
    },
    headerDescription: { textTransform: "uppercase" },
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
