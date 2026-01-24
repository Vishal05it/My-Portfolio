import React, { useEffect } from "react";
import "./Styles/Skills.css";
function Skills() {
  let progFunc = () => {
    let frontCount = document.querySelector(".frontCount");
    let backCount = document.querySelector(".backCount");
    let dsaCount = document.querySelector(".dsaCount");
    let dsaC = 0;
    let backC = 0;
    let frontPerc = 0;
    let frontInterval = setInterval(() => {
      if (frontPerc < 90) {
        frontPerc++;
        frontCount.innerText = frontPerc;
      } else {
        clearInterval(frontInterval);
      }
    }, 20);
    let backInterval = setInterval(() => {
      if (backC < 40) {
        backC++;
        backCount.innerText = backC;
      } else {
        clearInterval(backInterval);
      }
    }, 30);
    let dsaInterval = setInterval(() => {
      if (dsaC < 70) {
        dsaC++;
        dsaCount.innerText = Number(dsaC);
      } else {
        clearInterval(dsaInterval);
      }
    }, 25);
  };
  useEffect(() => {
    progFunc();
  }, []);
  return (
    <div className="mainDiv">
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "900",
          color: "skyblue",
          textShadow: "0 0 15px black",
          margin: "10px 200px",
          animation: "moveDown 0.8s ease-in 1 forwards",
        }}
      >
        Skills & Technologies
      </h1>{" "}
      <hr />
      <div
        id="frontDiv"
        className="skillsFormat"
        style={{ animation: "moveRight 0.8s linear 1 forwards" }}
      >
        <h1>Frontend Development</h1>
        <ul style={{ listStyle: "circle" }}>
          <li>
            <b>HTML5</b> – Semantic markup, accessibility-friendly structure.
          </li>
          <li>
            <b>CSS3</b> – Flexbox, Grid, responsive layouts, animations.
          </li>
          <li>
            <b>JavaScript (ES6+)</b> – DOM manipulation, async programming,
            event handling
          </li>
          <li>
            <b>React.js</b> – Components, Hooks, Context API, routing
          </li>
          <li>
            <b>Tailwind CSS</b> – Utility-first styling, responsive UI design
          </li>
        </ul>
      </div>
      <div
        id="backDiv"
        className="skillsFormat"
        style={{ animation: "moveLeft 0.8s linear 1 forwards" }}
      >
        <h1>Backend (Currently Learning)</h1>
        <ul style={{ listStyle: "circle" }}>
          <li>
            <b>Node.js</b> – Server-side JavaScript fundamentals.
          </li>
          <li>
            <b>Express.js</b> – REST API basics, routing, middleware.
          </li>
          <li>
            <b>MongoDB</b> – NoSQL concepts, CRUD operations
          </li>
        </ul>
      </div>
      <div
        id="basicCoding"
        className="skillsFormat"
        style={{ animation: "moveRight 0.8s linear 1 forwards" }}
      >
        <h1>Programming & CS Fundamentals</h1>
        <ul style={{ listStyle: "circle" }}>
          <li>
            <b>Java</b> – Object-Oriented Programming.
          </li>
          <li>
            <b>Data Structures & Algorithms</b> – Arrays, strings, recursion,
            basic problem-solving.
          </li>
          <li>
            <b>Logical & Analytical Thinking.</b>
          </li>
        </ul>
      </div>
      <div
        id="toolsNdPlat"
        className="skillsFormat"
        style={{ animation: "moveLeft 0.8s linear 1 forwards" }}
      >
        <h1>Tools & Platforms</h1>
        <ul style={{ listStyle: "circle" }}>
          <li>
            <b>Git & GitHub</b> – Version control, repositories, deployments.
          </li>
          <li>
            <b>VS Code</b> – Daily development environment.
          </li>
          <li>
            <b>IntelliJ IDEA</b> – Java project development
          </li>
          <li>
            <b>Vercel / GitHub Pages</b> – Frontend deployment
          </li>
        </ul>
      </div>
      <div id="skillsRange">
        <span id="frontEnd">
          <span className="rangeCont">
            <span className="progress frontProg"> Frontend </span>
          </span>
          <label htmlFor="frontEnd">
            {" "}
            <span className="frontCount">90</span>%
          </label>
        </span>
        <span id="backEnd">
          <span className="rangeCont">
            <span className="progress backProg"> Backend ( in Progess ) </span>
          </span>
          <label htmlFor="backEnd">
            <span className="backCount">40</span>%
          </label>
        </span>
        <span id="dsa">
          <span className="rangeCont">
            <span className="progress dsaProg"> DSA </span>
          </span>
          <label htmlFor="dsa">
            <span className="dsaCount">70</span>%
          </label>
        </span>
      </div>
    </div>
  );
}

export default Skills;
