import React from "react";
import { FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

function SocialMedia() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden">

      <div className="max-w-5xl mx-auto py-10">

        {/* ── HEADING ── */}
        <div className="mb-16 text-center fade-down delay-1">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.25)",
              color: "#3b82f6",
            }}
          >
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Connect <span className="gradient-text">With Me</span>
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-base max-w-lg mx-auto">
            Explore my work, projects, and professional profiles
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/vishal-tiwari-17684822a"
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard fade-up delay-2 group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)" }}
            >
              <FaLinkedin size={22} style={{ color: "#0077b5" }} />
            </div>
            <div className="flex-1">
              <h3>LinkedIn</h3>
              <p>Professional profile and career updates</p>
            </div>
            <span
              className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity mt-auto"
              style={{ color: "#3b82f6" }}
            >
              Visit Profile →
            </span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Vishal05it"
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard fade-up delay-3 group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ background: "rgba(100,116,139,0.12)", border: "1px solid rgba(100,116,139,0.2)" }}
            >
              <SiGithub size={22} className="text-slate-800 dark:text-slate-200" />
            </div>
            <div className="flex-1">
              <h3>GitHub</h3>
              <p>Explore my projects and code repositories</p>
            </div>
            <span
              className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity mt-auto text-slate-500 dark:text-slate-400"
            >
              View Repos →
            </span>
          </a>

          {/* PORTFOLIO */}
          <a
            href="https://vishalweb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard fade-up delay-4 group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ background: "rgba(236,72,153,0.1)", border: "1px solid rgba(236,72,153,0.2)" }}
            >
              <FaGlobe size={22} style={{ color: "#ec4899" }} />
            </div>
            <div className="flex-1">
              <h3>Business Portfolio</h3>
              <p>View my deployed projects and work</p>
            </div>
            <span
              className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity mt-auto"
              style={{ color: "#ec4899" }}
            >
              Visit Site →
            </span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:www.vishal.tiwari007@gmail.com"
            className="socialCard fade-up delay-5 group"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}
            >
              <FaEnvelope size={22} style={{ color: "#ef4444" }} />
            </div>
            <div className="flex-1">
              <h3>Email</h3>
              <p>Contact me directly for opportunities</p>
            </div>
            <span
              className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity mt-auto"
              style={{ color: "#ef4444" }}
            >
              Send Email →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
