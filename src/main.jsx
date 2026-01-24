import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./Components/HomePage.jsx";
import Education from "./Components/Education.jsx";
import Skills from "./Components/Skills.jsx";
import SocialMedia from "./Components/SocialMedia.jsx";
import Projects from "./Components/Projects.jsx";
import HireMe from "./Components/HireMe.jsx";
let myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="education" element={<Education />} />
      <Route path="skills" element={<Skills />} />
      <Route path="social-media" element={<SocialMedia />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="projects" element={<Projects />} />
      <Route path="hireme" element={<HireMe />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myRouter} />
  </StrictMode>,
);
