import { Divider, Typography } from "@mui/material";
import { Header } from "../ui";
import {
  AboutUs,
  Collaboration,
  ContactButton,
  Navbar,
  Search,
  ServicesCard,
  Testimonials,
} from "../components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Divider />
      <Header text="Tu espacio seguro" />
      <Search />

      <Typography
        variant="h2"
        textAlign="center"
        pt={24}
        sx={{ fontSize: "2rem", fontWeight: "500" }}
      >
        Nuestros servicios destacados
      </Typography>
      <ServicesCard
        title="Encuentra con claridad"
        text=" Descubre nuestras propiedades, elige las habitaciones que mas te
            guste, compartidas o privadas y segui el proceso de alquiler"
      />
      <ServicesCard
        title="Anunciantes"
        text="Dueños directos que buscan contribuir con la sociedad, ofreciendo alquileres a precios razonables y justos"
        flip
      />
      <ServicesCard
        title="Somos OrgulloProp"
        text="Tu sitio web amigable con la comunidad LGBTQ+ que brinda un ambiente seguro e inclusivo para todos"
      />

      <Typography
        variant="h2"
        textAlign="center"
        sx={{ fontSize: "2rem", fontWeight: "500" }}
      >
        Colaboracion
      </Typography>
      <br />
      <Collaboration />
      <ContactButton />
      <Testimonials />

      <Typography
        textAlign="center"
        variant="h2"
        sx={{ fontSize: "2rem", fontWeight: "500" }}
      >
        Sobre nosotros
      </Typography>
      <AboutUs />
    </>
  );
};

export default HomePage;
