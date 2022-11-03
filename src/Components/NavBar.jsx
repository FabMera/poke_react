import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? " active" : undefined); 

  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Navbar.Brand className="mx-4"></Navbar.Brand>
        <Container className="justify-content-end m-2">
          <NavLink  to="/" className={setActiveClass} style={{margin:'15px'}}>
            Home
          </NavLink>
          <NavLink
            to="/Pokemones"
            className={setActiveClass} style={{margin:'15px'}}
          >
            Pokemones
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
