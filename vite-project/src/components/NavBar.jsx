import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget} from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="primary">
      <Container>
        <Navbar.Brand href="/">Fashion Verse</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/Vestidos" as ={NavLink}>Vestidos</Nav.Link>
          <Nav.Link to="/category/Jeans" as ={NavLink}>Jeans</Nav.Link>
          <Nav.Link to="/category/Remeras" as ={NavLink}>Remeras</Nav.Link>
        </Nav>
        <CartWidget/>
      </Container>
    </Navbar>
  );
};


