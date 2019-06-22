import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/AboutMe">
              About Me
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/AddHike">
              Add a Hike
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/Projects">
              Projects
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/PlanHike">
              Plan a Hike
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/Contact">
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
