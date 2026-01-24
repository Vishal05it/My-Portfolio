import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeState, { useTheme } from "./Contexts/ThemeState";
import "./Styles/Navbar.css";
function Navbar() {
  return (
    <>
      <nav
        className="navbar"
        style={{ animation: "moveDown 0.8s linear 1 forwards" }}
      >
        <h2>
          Vishal <span>Tiwari</span>
        </h2>
        <div>
          <NavLink className="navLinks" to="/">
            Home
          </NavLink>
          <NavLink className="navLinks" to="/education">
            Education
          </NavLink>
          <NavLink className="navLinks" to="/skills">
            Skills
          </NavLink>
          <NavLink className="navLinks" to="/social-media">
            Social Media
          </NavLink>
          <NavLink className="navLinks" to="/projects">
            Projects
          </NavLink>
          <NavLink className="navLinks hireME" to="/hireme">
            Hire Me
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
