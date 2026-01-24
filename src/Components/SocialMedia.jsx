import React from "react";
import "./Styles/SocialMedia.css";
function SocialMedia() {
  return (
    <div className="mainDivSocial">
      <div className="holderDiv">
        <a href="https://www.linkedin.com/in/vishal-tiwari-17684822a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <div
            className="socialCard linkedinCard"
            style={{ animation: "moveDown 0.8s linear 1 forwards" }}
          >
            <span
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              {" "}
              <i class="fa-brands fa-linkedin"></i>
              <h2>LinkedIn</h2>
            </span>
            <p>Connect with me on LinkedIn for professional updates.</p>
          </div>
        </a>
        <a href="https://github.com/Vishal05it">
          {" "}
          <div
            className="socialCard githubCard"
            style={{ animation: "moveLeft 0.8s linear 1 forwards" }}
          >
            <span
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              {" "}
              <i class="fa-brands fa-github"></i>
              <h2>Github</h2>
            </span>

            <p>Visit my Github account to see my repositories.</p>
          </div>
        </a>
      </div>
      <div className="holderDiv">
        <a href="https://www.instagram.com/vishal_tiwari_tiwari_ji?igsh=MXc0aTAza2I1aGR1cg==">
          {" "}
          <div
            className="socialCard instaCard"
            style={{ animation: "moveRight 0.8s linear 1 forwards" }}
          >
            <span
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              {" "}
              <i class="fa-brands fa-instagram"></i>
              <h2>Instagram</h2>
            </span>

            <p>Visit my Instagram account to see my posts.</p>
          </div>
        </a>
        <a href="https://www.facebook.com/share/1LqUYu1id1/">
          {" "}
          <div
            className="socialCard fbCard"
            style={{ animation: "moveUp 0.8s linear 1 forwards" }}
          >
            <span
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              {" "}
              <i class="fa-brands fa-facebook"></i>
              <h2>Facebook</h2>
            </span>

            <p>Visit my Facebook account to see my posts.</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
