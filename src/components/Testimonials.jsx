import { Grid, Typography } from "@mui/material";
import { TestimonialCommentCard } from "./";

const Testimonials = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={2}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "626", color: "#000", textAlign: "center" }}
          >
            Testimonios de <span className="purple-color">nuestra</span>{" "}
            comunidad
          </Typography>
          <Typography variant="body1" sx={{ mt: "4rem", textAlign: "center" }}>
            Descubri por qué a nuestros clientes les encanta alquilar
            departamentos con Orgulloprop! Estamos contentos de ofrecer un
            espacio seguro para la comunidad
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TestimonialCommentCard
            userName="Sofia Ramirez"
            userCity="Buenos Aires, Temperley"
          >
            Orgulloprop hizo que encontrar un alquiler fuera muy fácil! Servicio
            amable y profesional
          </TestimonialCommentCard>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TestimonialCommentCard
            userName="Santiago Morales"
            userCity="Buenos Aires, Merlo"
          >
            El compromiso de Orgulloprop con la comunidad LGBTQ+ es admirable.
            Gran experiencia en general.
          </TestimonialCommentCard>
        </Grid>
        <Grid item xs={12} sm={2}>
          <TestimonialCommentCard
            userName="Lucía Medina"
            userCity="Buenos Aires, Avellaneda"
          >
            Como propietario, agradezco el apoyo de Orgulloprop. ¡Muy
            recomendable!
          </TestimonialCommentCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Testimonials;
