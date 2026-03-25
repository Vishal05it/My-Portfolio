import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* LOGO */}
        <NavLink to="/">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-gray-800 dark:text-white fade-right delay-1">
            Vishal <span className="text-pink-600">Tiwari</span>
          </h2>
        </NavLink>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6 fade-left delay-2">
          <NavLink className="navItem" to="/">
            Home
          </NavLink>
          <NavLink className="navItem" to="/education">
            Education
          </NavLink>
          <NavLink className="navItem" to="/skills">
            Skills
          </NavLink>
          <NavLink className="navItem" to="/social-media">
            Social
          </NavLink>
          <NavLink className="navItem" to="/projects">
            Projects
          </NavLink>

          {/* CTA */}
          <NavLink
            to="/hireme"
            className="px-4 py-2 rounded-xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition"
          >
            Hire Me
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-gray-800 dark:text-white fade-left delay-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden px-4 pb-4 flex flex-col gap-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <NavLink onClick={() => setOpen(false)} className="navItem">
          Home
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className="navItem"
          to="/education"
        >
          Education
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className="navItem"
          to="/skills"
        >
          Skills
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className="navItem"
          to="/social-media"
        >
          Social
        </NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          className="navItem"
          to="/projects"
        >
          Projects
        </NavLink>

        <NavLink
          onClick={() => setOpen(false)}
          to="/hireme"
          className="text-center px-4 py-2 rounded-xl bg-pink-600 text-white font-medium"
        >
          Hire Me
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
