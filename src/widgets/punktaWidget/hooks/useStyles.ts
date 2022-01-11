import { makeStyles, createStyles } from "@mui/styles";
import { colors } from "../PunktaWidget.data";

const useStyles = makeStyles(() =>
  createStyles({
    submitButton: {
      backgroundColor: colors.yellow[600],
      color: colors.black,
      borderRadius: "25px",
      "&:hover": {
        backgroundColor: colors.yellow[700],
      },
    },
  })
);

export default useStyles;
