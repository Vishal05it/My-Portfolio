import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./Contexts/ThemeState";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, darkMode, lightMode } = useTheme();

  return (
    <nav className="w-full sticky top-0 z-50 fade-down"
      style={{
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        background: theme === "dark"
          ? "rgba(2, 6, 23, 0.85)"
          : "rgba(248, 250, 252, 0.85)",
        borderBottom: theme === "dark"
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* LOGO */}
        <NavLink to="/" className="fade-right delay-1">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            <span className="text-slate-800 dark:text-white">Vishal</span>{" "}
            <span className="gradient-text">Tiwari</span>
          </h2>
        </NavLink>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-7 fade-left delay-2">
          <NavLink className="navItem" to="/">Home</NavLink>
          <NavLink className="navItem" to="/education">Education</NavLink>
          <NavLink className="navItem" to="/skills">Skills</NavLink>
          <NavLink className="navItem" to="/social-media">Social</NavLink>
          <NavLink className="navItem" to="/projects">Projects</NavLink>

          {/* Dark / Light toggle */}
          <button
            onClick={() => (theme === "dark" ? lightMode() : darkMode())}
            aria-label="Toggle colour theme"
            className="p-2 rounded-xl transition-all duration-200"
            style={{
              background: theme === "dark" ? "#1e293b" : "#f1f5f9",
              color:  theme === "dark" ? "#94a3b8" : "#64748b",
            }}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* CTA */}
          <NavLink
            to="/hireme"
            className="px-5 py-2 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
              boxShadow: "0 4px 14px rgba(236,72,153,0.35)",
            }}
          >
            Hire Me
          </NavLink>
        </div>

        {/* MOBILE RIGHT CLUSTER */}
        <div className="md:hidden flex items-center gap-2 fade-left delay-2">
          <button
            onClick={() => (theme === "dark" ? lightMode() : darkMode())}
            aria-label="Toggle colour theme"
            className="p-2 rounded-xl transition-all duration-200"
            style={{
              background: theme === "dark" ? "#1e293b" : "#f1f5f9",
              color:  theme === "dark" ? "#94a3b8" : "#64748b",
            }}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden px-4 flex flex-col gap-3 transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: theme === "dark" ? "rgba(2,6,23,0.97)" : "rgba(248,250,252,0.97)",
          borderTop: theme === "dark"
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <NavLink onClick={() => setOpen(false)} className="navItem pt-3" to="/">Home</NavLink>
        <NavLink onClick={() => setOpen(false)} className="navItem" to="/education">Education</NavLink>
        <NavLink onClick={() => setOpen(false)} className="navItem" to="/skills">Skills</NavLink>
        <NavLink onClick={() => setOpen(false)} className="navItem" to="/social-media">Social</NavLink>
        <NavLink onClick={() => setOpen(false)} className="navItem" to="/projects">Projects</NavLink>
        <NavLink
          onClick={() => setOpen(false)}
          to="/hireme"
          className="text-center py-2.5 rounded-xl font-semibold text-white text-sm mt-1"
          style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
        >
          Hire Me
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
