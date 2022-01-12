import { Box, Typography } from "@mui/material";
import logo from "../../assets/LogotypPunkta.png";
import useStyles from "./hooks/useStyles";

function PunktaWidgetHeader() {
  const classes = useStyles();

  return (
    <Box component="header" className={classes.headerContainer}>
      <Box component="span" className={classes.headerCircle} />
      <Box className={classes.headerContentBox}>
        <img
          src={logo}
          alt="Logotyp Punkta"
          style={{ width: "fit-content", alignSelf: "center" }}
        />

        <Typography
          color="#0A2C48"
          fontFamily="Red Hat Display"
          fontWeight="bold"
          align="center"
          className={classes.headerDescription}
        >
          Oszczędź nawet <br /> 580 złotych na OC
        </Typography>
      </Box>
    </Box>
  );
}

export default PunktaWidgetHeader;
