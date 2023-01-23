import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
const AppNav = () => {
  const { cart } = useSelector((state) => state.cart);
  const { isLogged } = useAuth();
  let logged = null;
  useEffect(() => {
    if (!isLogged) {
      logged = (
        <Nav.Link as={Link} to="login">
          Log In
        </Nav.Link>
      );
    } else {
      logged = null;
    }
  }, [isLogged]);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Shopping Cart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="cart">
              Cart - {cart.length}
            </Nav.Link>
            {logged}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNav;
