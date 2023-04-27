import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

export function NavBar() {
  return (
    <>
      <Navbar className="Navbar" fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container className="container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto gap-5">
            <Nav.Link className="links" href="#description">Home</Nav.Link>
            <Nav.Link className="links" href="#skills">Skills</Nav.Link>
            <Nav.Link className="links" href="#xp">XP</Nav.Link>
            <Nav.Link className="links" href="#projets">Projets</Nav.Link>
            <Nav.Link className="links" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
