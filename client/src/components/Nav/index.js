import React from "react";
import { Container ,Navbar, NavDropdown } from 'react-bootstrap';

function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
      <a className="navbar-brand" href="/">
        Search
      </a>
      <a className="navbar-brand" href="/saved">
        Saved
      </a>
      <Navbar.Brand className= "ml-auto">Google Book Search</Navbar.Brand>
  </Navbar>
  );
}

export default Nav;
