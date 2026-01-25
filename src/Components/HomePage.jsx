import React, { use } from "react";
import "./Styles/HomePage.css";
import PortfolioPhoto from "./Styles/Portfolio Photo.jpeg";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="mainDiv">
      <div id="leftDiv">
        <h5
          style={{
            position: "relative",
            animation: "moveDown 0.5s linear 1 forwards",
          }}
        >
          Hi, I'm Vishal{" "}
          <span
            id="waveHand"
            style={{ position: "absolute", right: "-30%", top: "-20%" }}
          >
            👋
          </span>
        </h5>
        <h2 style={{ animation: "moveRight 0.9s linear 1 forwards" }}>
          Frontend Developer | React & JavaScript
        </h2>
        <article style={{ animation: "moveLeft 0.9s linear 1 forwards" }}>
          I build responsive, interactive web applications using React,
          JavaScript, and modern CSS. I enjoy turning UI designs into clean,
          functional interfaces. Currently learning backend development with the
          MERN stack to become a full-stack developer.
        </article>
        <p style={{ animation: "moveUp 0.7s linear 1 forwards" }}>
          Final-year B.Tech IT student | Open to Frontend roles & paid
          internships
        </p>
        <span
          id="callToActions"
          style={{ animation: "moveUp 0.9s linear 1 forwards" }}
        >
          <button onClick={() => navigate("/projects")}>View Projects</button>
          <a href="../../Vishal_Updated_Resume.pdf" download>
            Download Resume
          </a>
        </span>
      </div>
      <span
        id="rightSpan"
        style={{ animation: "moveLeftPic 0.9s linear 1 forwards" }}
      >
        <img src={PortfolioPhoto} alt="" />
      </span>
    </div>
  );
}

export default HomePage;
