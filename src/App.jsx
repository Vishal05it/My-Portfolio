import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ThemeState from "./Components/Contexts/ThemeState";
import Wrapper from "./Wrapper";
function App() {
  return (
    <>
      <Wrapper />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
