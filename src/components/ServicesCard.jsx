import { Grid, Typography } from "@mui/material";

const ServicesCard = ({ title, text, flip = false }) => {
  return (
    <>
      <Grid
        container
        alignItems="center"
        width="50%"
        textAlign="center"
        direction={`${flip && "row-reverse"}`}
        sx={{
          backgroundColor: "#F3E0FA",
          padding: "1rem",
          margin: "5rem auto",
          borderRadius: "5px",
          boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Grid xs={6} item>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{text}</Typography>
        </Grid>
        <Grid xs={6} textAlign="center" item>
          <h1>IMAGEN</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default ServicesCard;
