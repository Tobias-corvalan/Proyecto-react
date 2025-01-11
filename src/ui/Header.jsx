import { Typography } from "@mui/material";

const Header = ({ text }) => {
  return (
    <>
      <Typography
        textAlign="center"
        sx={{ fontSize: "4rem", mt: "10rem" }}
        variant="h1"
      >
        {text}
      </Typography>
    </>
  );
};

export default Header;
