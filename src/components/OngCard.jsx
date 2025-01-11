import { Card, CardContent, Typography } from "@mui/material";

const OngCard = () => {
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
          <Typography align="center">ONG</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default OngCard;
