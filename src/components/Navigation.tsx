import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface Route {
  name: string;
  url: string;
}
const routes: Route[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Store",
    url: "/store",
  },
  {
    name: "About",
    url: "/about",
  },
];

export const Navigation = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar sticky="top" className="bg=white shadow-lg mb-3">
      <Container>
        <Nav className="me-auto">
          {routes.map((el, i) => (
            <Nav.Link key={i} to={el.url} as={NavLink}>
              {el.name}
            </Nav.Link>
          ))}
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <FaShoppingCart />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: "0",
                right: "0",
                transform: "translate(25%,25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </Navbar>
  );
};
