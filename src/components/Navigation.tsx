import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

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
  return (
    <Navbar className="bg=white shadow-lg mb-3">
      <Container>
        <Nav>
          {routes.map((el, i) => (
            <Nav.Link key={i} to={el.url} as={NavLink}>
              {el.name}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};
