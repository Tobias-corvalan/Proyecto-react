import { Button, Grid, lighten, Toolbar, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { useState } from "react";
import PopupComment from "./PopupComment";

const textsLinks = [{ text: "Colaboracion" }, { text: "Nosotros" }];

const brighterColor = lighten("#E7C4F3", 0.2);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Toolbar>
        <Grid alignItems="center" container spacing={10}>
          {textsLinks.map((textLink) => (
            <Grid key={textLink.text} item>
              <Link className="text-decoration-none">
                <Typography sx={{ color: "black" }}>{textLink.text}</Typography>
              </Link>
            </Grid>
          ))}
          <Grid item>
            <Button onClick={handleClickOpen}>
              <Typography sx={{ color: "black" }}>
                Dejanos tu comentario
              </Typography>
            </Button>
          </Grid>
        </Grid>

        <PopupComment open={open} handleClose={handleClose} />

        <Grid
          alignItems="center"
          justifyContent="flex-end"
          container
          spacing={2}
        >
          <Grid item>
            <Button
              variant="contained"
              sx={{
                px: 4,
                backgroundColor: "#E7C4F3",
                color: "black",
                borderRadius: 10,
                "&:hover": { backgroundColor: brighterColor },
              }}
            >
              <Typography variant="body2">Publicar</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button
              className="rounded-pill px-3 pt-1 pb-1"
              variant="text"
              sx={{ color: "black" }}
            >
              <Typography sx={{ mr: "1rem" }} variant="body2">
                Acceder
              </Typography>
              <PersonIcon />
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
};

export default Navbar;
