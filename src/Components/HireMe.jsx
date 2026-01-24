import React from "react";
import "./Styles/HireMe.css";
import { useNavigate } from "react-router-dom";
import Whatsapp from "../assets/whatsapp-removebg-preview.png";
import Dialer from "../assets/Dialer-removebg-preview.png";
import Gmail from "../assets/Gmail-Logo.wine-removebg-preview.png";
function HireMe() {
  const navigate = useNavigate();
  return (
    <div className="mainDivHire">
      <div style={{ animation: "moveDown 0.8s linear 1" }}>
        <h1>Hire Me</h1>
      </div>
      <h2 style={{ animation: "moveDown 0.8s linear 1" }}>
        Frontend Developer | React | JavaScript
      </h2>
      <p id="aboutMe" style={{ animation: "moveRight 0.8s linear 1" }}>
        I’m Vishal Tiwari, a final-year B.Tech IT student and frontend developer
        focused on building responsive, user-friendly, and interactive web
        applications. I specialize in React, JavaScript, and modern CSS, and I’m
        currently learning backend development with the MERN stack. I’m actively
        looking for frontend roles, paid internships, and real-world projects to
        grow professionally and contribute to meaningful products.
      </p>
      <div id="links" style={{ animation: "moveLeft 0.8s linear 1" }}>
        <a href="mailto:www.vishal.tiwari007@gmail.com" className="clickBtns">
          <img src={Gmail} style={{ height: "40px" }} alt="" />
          Email me
        </a>
        <a href="tel:+91 7007242112" className="clickBtns">
          <img src={Dialer} style={{ height: "35px" }} alt="" />
          Call Me
        </a>
        <a
          href="https://wa.me/917007242112
"
          className="clickBtns"
        >
          <img src={Whatsapp} style={{ height: "70px" }} alt="" />
          WhatsApp
        </a>
      </div>
      <div style={{ animation: "moveUp 0.8s linear 1" }}>
        <p id="trust" style={{ animation: "squish 1.5s linear infinite" }}>
          "Focused on real-world development, not just tutorials."
        </p>
      </div>
    </div>
  );
}

export default HireMe;
