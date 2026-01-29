import React from "react";
import "./Styles/Projects.css";
import BrowserGame from "../assets/BrowserGamePic.png";
import PasswordGenerator from "../assets/PasswordGeneratorPic.png";
import RestCountry from "../assets/RestAPIPic.png";
import JavaGames from "../assets/SnakeGamePic.png";
import Stopwatch from "../assets/TimerPic.png";
import YogaPic from "../assets/YogaPic.png";
import ToDoList from "../assets/ToDoList.png";
import HeartTask from "../assets/HeartTaskPic.png";
import ReactTicTacToe from "../assets/TicTacToeReact.png";
import Banking from "../assets/Banking.png";
function Projects() {
  let leftSwipeAmt = -50;
  let rightSwipeAmt = -50;
  let btnVal = 0;
  let leftSwipe = () => {
    let miniProCont = document.querySelector("#miniProCont");
    if (btnVal < 5) {
      btnVal++;
      miniProCont.style.left = `${leftSwipeAmt}%`;
      leftSwipeAmt -= 50;
      rightSwipeAmt += 50;
    }
  };
  let rightSwipe = () => {
    let miniProCont = document.querySelector("#miniProCont");

    if (btnVal > 0) {
      miniProCont.style.left = `${-rightSwipeAmt}%`;
      rightSwipeAmt -= 50;
      leftSwipeAmt += 50;
      btnVal--;
      console.log(btnVal);
    }
  };
  return (
    <div className="mainDiv mainDivProjects">
      <div id="majorCard" style={{ animation: "pop 0.6s linear 1 " }}>
        <h1>Persistent Tic Tac Toe System (React)</h1>
        <a
          href="https://persistent-tic-tac-toe-system.vercel.app/"
          title="See Game"
          target="_blank"
        >
          <img src={ReactTicTacToe} alt="" />
        </a>
        <h2 style={{ maxWidth: "1300px" }}>
          A browser-based stateful game showcasing persistent data storage,
          global state management, and real-time UI synchronization using React.
        </h2>
        <p style={{ maxWidth: "1100px" }}>
          Built a persistent multi-round Tic Tac Toe system using React, Context
          API, and localStorage, featuring session recovery, score tracking, and
          continuous gameplay. Implemented centralized state management for
          turns, moves, rounds, and scores, with automatic state rehydration
          after browser reloads. Designed structured game logic for turn flow,
          win/draw detection, and round lifecycle handling. Focused on clean
          state architecture, user experience continuity, and reliable
          game-state control.
        </p>
        <caption>Logics Implemented :</caption>
        <ul>
          <li>Global state management (Context API)</li>
          <li>Persistent storage (localStorage)</li>
          <li>Session recovery & state rehydration</li>
          <li>Turn-based game flow logic</li>
          <li>Win-condition & draw detection</li>
          <li>Multi-round game lifecycle</li>
          <li>Centralized game-state architecture</li>
          <li>Real-time UI synchronization</li>
        </ul>
        <a
          href="https://persistent-tic-tac-toe-system.vercel.app/"
          target="_blank"
          title="See Game"
          id="gameBtn"
        >
          {" "}
          Live Demo
        </a>
      </div>
      <div
        id="miniProBoundary"
        style={{ animation: "pop 0.6s linear 1 ", backgroundColor: "yellow" }}
      >
        <span>
          <h1 id="mpHead">Mini Projects</h1>
        </span>
        <div id="miniProCont">
          <span className="miniProCards">
            {" "}
            <a
              className="imgStore"
              href="https://persistent-multi-account-transactio.vercel.app/"
              target="_blank"
            >
              <img src={Banking} alt="" />
            </a>
            <h1>Multi-Account Transaction System</h1>
            <p>
              Built a React-based multi-account transaction system with global
              state management, localStorage persistence, transaction logging,
              and rule-based system logic.
            </p>
            <a
              className="miniBtn"
              href="https://persistent-multi-account-transactio.vercel.app/"
              target="_blank"
            >
              Live Demo
            </a>
          </span>
          <span className="miniProCards">
            {" "}
            <a
              className="imgStore"
              href="https://vishal05it.github.io/Mario-Game-Code/"
              target="_blank"
            >
              <img src={BrowserGame} alt="" />
            </a>
            <h1>Interactive Browser Game </h1>
            <p>
              Built an interactive browser game inspired by classic platformers,
              featuring smooth animations, collision detection, scoring system,
              and level progression.
            </p>
            <a
              className="miniBtn"
              href="https://vishal05it.github.io/Mario-Game-Code/"
              target="_blank"
            >
              Live Demo
            </a>
          </span>
          <span className="miniProCards">
            {" "}
            <a
              className="imgStore"
              href="https://random-password-generator-peach-five.vercel.app/"
              target="_blank"
            >
              <img src={PasswordGenerator} alt="" />
            </a>
            <h1>Password Generator (React)</h1>
            <p>
              A secure and customizable password generator built using React
              Hooks. Allows users to configure password length and character
              types with instant UI updates.
            </p>
            <a
              className="miniBtn"
              href="https://random-password-generator-peach-five.vercel.app/"
              target="_blank"
            >
              Live Demo
            </a>
          </span>
          <span className="miniProCards">
            {" "}
            <a
              className="imgStore"
              href="https://vishal05it.github.io/Rest-Country-API/"
              target="_blank"
            >
              <img src={RestCountry} alt="" />
            </a>
            <h1>REST Countries Explorer</h1>
            <p>
              A dynamic web app that fetches and displays country data using
              REST APIs with search, filter, pagination, and dark/light mode
              support.
            </p>
            <a
              className="miniBtn"
              href="https://vishal05it.github.io/Rest-Country-API/"
              target="_blank"
            >
              Live Demo
            </a>
          </span>
          <span className="miniProCards">
            <a
              className="imgStore"
              href="https://github.com/Vishal05it/SnakeGame-Java"
              target="_blank"
            >
              <img src={JavaGames} alt="" />
            </a>
            <h1>Java Games – Snake & Tic Tac Toe</h1>
            <p>
              Logic-based desktop games implementing object-oriented programming
              concepts, game state management, and win-condition logic.
            </p>
            <a
              className="miniBtn"
              href="https://github.com/Vishal05it/SnakeGame-Java"
              target="_blank"
            >
              Live Demo
            </a>
          </span>
          <span className="miniProCards">
            <a
              className="imgStore"
              href="https://vishal05it.github.io/Stop-Watch-2/"
              target="_blank"
            >
              <img src={Stopwatch} alt="" />
            </a>
            <h1>Stopwatch App</h1>
            <p>
              A functional stopwatch with start, pause, reset, and accurate time
              tracking using JavaScript event handling by using clean logic.
            </p>
            <a
              className="miniBtn"
              href="https://vishal05it.github.io/Stop-Watch-2/"
              target="_blank"
            >
              Live Demo
            </a>
          </span>
          <span className="miniProCards">
            <a
              className="imgStore"
              href="https://vishal05it.github.io/YogaClasses-Only-Design-/"
              target="_blank"
            >
              <img src={YogaPic} alt="" />
            </a>
            <h1>Yoga Landing Page</h1>
            <p>
              A clean and responsive landing page designed for a yoga studio,
              focusing on layout structure, visual hierarchy, and responsive
              design.
            </p>
            <a
              className="miniBtn"
              href="https://vishal05it.github.io/YogaClasses-Only-Design-/"
              target="_blank"
            >
              Live Demo
            </a>
          </span>
          <span className="miniProCards">
            <a
              className="imgStore"
              href="https://vishal05it.github.io/ToDoList/"
              target="_blank"
            >
              <img src={ToDoList} alt="" />
            </a>
            <h1>Dynamic To-Do List Web App</h1>
            <p>
              A dynamic to-do list web application built using pure HTML, CSS,
              and JavaScript with real-time task creation, completion tracking,
              and deletion features.
            </p>
            <a
              className="miniBtn"
              href="https://vishal05it.github.io/ToDoList/"
              target="_blank"
            >
              Live Demo
            </a>
          </span>
          <span className="miniProCards">
            <a
              className="imgStore"
              href="https://vishal05it.github.io/Heart-Task/"
              target="_blank"
            >
              <img src={HeartTask} alt="" />
            </a>
            <h1>Moving Heart Animation</h1>
            <p>
              A creative animation project using DOM manipulation and
              JavaScript-driven motion effects to enhance visual interaction.
            </p>
            <a
              className="miniBtn"
              href="https://vishal05it.github.io/Heart-Task/"
              target="_blank"
            >
              Live Demo
            </a>
          </span>
        </div>
        <div id="nextPrevDiv">
          <button
            className="prevIcon"
            onClick={() => {
              leftSwipe();
              console.log(btnVal);
            }}
          >
            <i className="fa-solid fa-arrow-left-long  icons"></i>
          </button>
          <button
            className="nextIcon rightBtn"
            onClick={() => {
              rightSwipe();
            }}
          >
            <i className="fa-solid fa-arrow-right-long  icons"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
