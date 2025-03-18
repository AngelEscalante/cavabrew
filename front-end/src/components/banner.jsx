import Navbar from "react-bootstrap/Navbar";
import { Power } from "lucide-react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function Banner({ empresa, logo }) {
  return (
    <Navbar bg="dark" variant="dark" className="p-2">
      <Container fluid>
        {/* Logo y Nombre */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            alt="Logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          {empresa}
        </Navbar.Brand>

        {/* Botón solo con icono y efecto outline en hover */}
        <Button
          variant="outline-danger"
          className="border-0 bg-transparent shadow-none p-1 
                     d-flex align-items-center justify-content-center 
                     hover:border hover:border-light"
          style={{ transition: "all 0.2s ease-in-out" }}
        >
          <Power size={20} />
        </Button>
      </Container>
    </Navbar>
  );
}