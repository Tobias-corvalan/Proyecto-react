import { Card, CardActions, CardContent, Grid2 } from "@mui/material";

const TestimonialCommentCard = ({ children, userName, userCity }) => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#ECECEC",
          width: "295px",
          height: "214px",
          borderRadius: "9px",
          px: "10px",
        }}
      >
        <CardContent sx={{ fontWeight: "bolder", textAlign: "center" }}>
          {children}
        </CardContent>
        <CardActions sx={{ fontWeight: "bolder", textAlign: "center" }}>
          {userName}
        </CardActions>
        <CardActions sx={{ fontWeight: "300" }}>{userCity}</CardActions>
      </Card>
    </>
  );
};

export default TestimonialCommentCard;
