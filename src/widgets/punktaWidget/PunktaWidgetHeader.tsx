import { Box, Typography } from "@mui/material";
import logo from "../../assets/LogotypPunkta.png";

function PunktaWidgetHeader() {
  return (
    <Box
      component="header"
      sx={{ position: "relative", height: 210, overflow: "hidden" }}
    >
      <Box
        component="span"
        sx={{
          height: 400,
          width: 350,
          bottom: 0,
          left: "50%",
          display: "block",
          borderRadius: "50%",
          position: "absolute",
          backgroundColor: "#F5F5F5",
          transform: "translateX(-50%)",
        }}
      />
      <Box
        sx={{
          zIndex: 1,
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          gap: "30px",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
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
          sx={{ textTransform: "uppercase" }}
        >
          Oszczędź nawet
          <br /> 580 złotych na OC
        </Typography>
      </Box>
    </Box>
  );
}

export default PunktaWidgetHeader;
