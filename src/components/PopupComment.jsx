import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "../hooks";

const PopupComment = ({ open, handleClose }) => {
  const {
    handleChange,
    reset,
    nameField,
    localityField,
    countyField,
    responseField,
  } = useForm({
    nameField: "",
    localityField: "",
    countyField: "",
    responseField: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nameField, localityField, countyField, responseField });
    reset();
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "963px",
            height: "550px",
            bgcolor: "#FEFCFF",
            boxShadow: 24,
            p: 4,
            borderRadius: 10,
          }}
        >
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" color="#931FEF" pb={3}>
              Contanos tu experiencia
            </Typography>
            <Grid container spacing={10}>
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    name="nameField"
                    value={nameField}
                    onChange={handleChange}
                    color="secondary"
                    label="Nombre"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#E9DDDD",
                        borderRadius: 10,
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl fullWidth>
                  <InputLabel color="secondary" id="locality-label">
                    Localidad
                  </InputLabel>
                  <Select
                    name="localityField"
                    value={localityField}
                    onChange={handleChange}
                    color="secondary"
                    labelId="locality-label"
                    label="Localidad"
                    sx={{
                      backgroundColor: "#E9DDDD",
                      borderRadius: 10,
                      width: "13rem",
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl fullWidth>
                  <InputLabel color="secondary" id="county">
                    Provincia
                  </InputLabel>
                  <Select
                    name="countyField"
                    value={countyField}
                    onChange={handleChange}
                    color="secondary"
                    labelId="county"
                    label="Provincia"
                    sx={{
                      backgroundColor: "#E9DDDD",
                      borderRadius: 10,
                      width: "13rem",
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container sx={{ mt: "5rem" }}>
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    name="responseField"
                    value={responseField}
                    onChange={handleChange}
                    placeholder="Tu respuesta"
                    multiline
                    fullWidth
                    color="#000"
                    sx={{
                      width: "817px",
                      height: "235px",
                      border: "dashed 1px",
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none", // Remueve el borde original
                      },
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Typography mt={1}>
              Escribi un maximo de 250 caracteres
            </Typography>
            <Button
              color="#000"
              type="submit"
              variant="outlined"
              sx={{ mt: "1rem", bgcolor: "#E9DDDD" }}
            >
              Enviar
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default PopupComment;
