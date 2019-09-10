import React from 'react';
import { Link } from 'react-router-dom';
import "../pages/About.css"
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand = "lg" className="navbar navbar-expand-sm navbar-dark"
    style = {{
      backgroundColor: "maroon"
    }}>
       <Link className="navbar-brand" to="/">
        Home
      </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className = "justify-content-end">
        <Nav>
            <Link className="nav-link text-light mx-2" to="/AboutMe">
              About Me
            </Link>
            <Link className="nav-link text-light mx-2" to="/Projects">
              Projects
            </Link>
            {/* <Link className="nav-link text-light mx-2" to="/Contact">
              Contact Me
            </Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
