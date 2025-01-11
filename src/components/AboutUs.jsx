import { Grid, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <>
      <Grid container justifyContent="center" mt={7}>
        <Grid item>
          <Typography sx={{ textAlign: "center", width: "60vw" }}>
            Somos un equipo de cinco programadores de la Fundación Pescar,
            dedicados a desarrollar una página web que facilite el acceso a
            hogares seguros para personas en situación de vulnerabilidad. Con
            mucha pasión por la tecnología y una profunda empatía, trabajamos
            para crear soluciones digitales que promuevan la inclusión y la
            estabilidad.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
