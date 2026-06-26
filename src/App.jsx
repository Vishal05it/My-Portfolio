import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ThemeState from "./Components/Contexts/ThemeState";
import Wrapper from "./Wrapper";

function App() {
  return (
    <ThemeState>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <Wrapper />
        <Navbar />
        <Outlet />
      </div>
    </ThemeState>
  );
}

export default App;
