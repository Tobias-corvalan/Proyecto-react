import { Box, Button } from "@mui/material";

const ContactButton = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            background: "#E9DDDD",
            border: "medium solid rgba(0, 0, 0, 0.1)",
            color: "inherit",
            borderRadius: "20px",
          }}
        >
          Contactanos
        </Button>
      </Box>
    </>
  );
};

export default ContactButton;
