import { Card, CardContent, Typography } from "@mui/material";

const MembershipsCard = () => {
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
          <Typography align="center">Membresias</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default MembershipsCard;
