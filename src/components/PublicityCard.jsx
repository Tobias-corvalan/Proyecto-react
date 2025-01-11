import { Card, CardContent, Typography } from "@mui/material";

const PublicityCard = () => {
  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography align="center">Publicidad</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PublicityCard;
