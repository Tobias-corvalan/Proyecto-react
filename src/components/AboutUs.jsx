import { Grid, Typography } from "@mui/material";
import adorableDog from "../assets/adorable-dog-2.jpg";
import adorableDog2 from "../assets/adorable-dog.webp";

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
        <Grid item sx={{ backgroundColor: "D9D9D9" }}>
          <figure>
            <img src={adorableDog} alt="perrito" />
            <img src={adorableDog2} alt="perrito" />
          </figure>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutUs;
