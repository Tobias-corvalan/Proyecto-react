import { Grid } from "@mui/material";
import { PublicityCard, MembershipsCard, OngCard } from "./";

const Collaboration = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          height: "100vh",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        {/* columna izquierda con dos Cards */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2} sx={{ height: "100%" }}>
            <Grid item xs={12} sx={{ height: "50%" }}>
              <PublicityCard />
            </Grid>
            <Grid item xs={12} sx={{ height: "50%" }}>
              <MembershipsCard />
            </Grid>
          </Grid>
        </Grid>

        {/* columna derecha con una Card que ocupa todo el alto */}
        <Grid item xs={12} md={4}>
          <OngCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Collaboration;
