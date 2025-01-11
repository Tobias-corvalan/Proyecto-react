import {
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useForm } from "../hooks";

const environments = [
  { text: "Monoambiente", value: "singleRoom" },
  { text: "Habitacion", value: "room" },
];

const propertys = [
  { text: "Compartido", value: "shared" },
  { text: "Privado", value: "private" },
];

const Search = () => {
  const { propertyField, environmentField, searchField, handleChange } =
    useForm({
      propertyField: "",
      environmentField: "",
      searchField: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ propertyField, environmentField, searchField });
  };

  return (
    <>
      <Grid justifyContent="center" sx={{ mt: "4rem" }} container>
        <Grid item>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Select
                name="propertyField"
                onChange={handleChange}
                value={propertyField}
                sx={{ width: "10rem" }}
              >
                {environments.map(({ text, value }) => (
                  <MenuItem key={value} value={value}>
                    {text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                name="environmentField"
                onChange={handleChange}
                value={environmentField}
                sx={{ width: "10rem" }}
              >
                {propertys.map(({ text, value }) => (
                  <MenuItem key={value} value={value}>
                    {text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <TextField
                name="searchField"
                onChange={handleChange}
                color="secondary"
                sx={{ width: "38rem" }}
                placeholder="Ingresa ubicacion, barrio o localidad"
                value={searchField}
              />
            </FormControl>
            <IconButton
              type="submit"
              sx={{
                backgroundColor: "#E7C4F3",
                ml: "1rem",
                height: "56px",
                width: "56px",
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
