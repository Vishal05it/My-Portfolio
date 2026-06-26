import React from "react";
import { useNavigate } from "react-router-dom";
import PortfolioPhoto from "./Styles/Portfolio Photo.png";
import Resume from "./Vishal_Updated_Resume.pdf";

function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        {/* ── LEFT CONTENT ── */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Available badge */}
          <div
            className="fade-down delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background:
                "linear-gradient(135deg, rgba(236,72,153,0.08), rgba(139,92,246,0.08))",
              border: "1px solid rgba(236,72,153,0.25)",
              color: "#ec4899",
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-green-400"
              style={{
                animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
            />
            Available for Work
          </div>

          {/* Greeting */}
          <h5 className="fade-down delay-1 text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium">
            Hi, I'm Vishal{" "}
            <span
              className="inline-block"
              style={{ animation: "bounce 1s infinite" }}
            >
              👋
            </span>
          </h5>

          {/* Main heading */}
          <h1 className="fade-up delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Full Stack{" "}
            <span className="gradient-text block sm:inline">Developer</span>
          </h1>

          {/* Tech badges */}
          <div className="fade-up delay-3 flex flex-wrap gap-2 justify-center lg:justify-start">
            {[
              {
                label: "MERN Stack",
                bg: "rgba(59,130,246,0.1)",
                border: "rgba(59,130,246,0.3)",
                color: "#3b82f6",
              },
              {
                label: "Next.js",
                bg: "rgba(16,185,129,0.1)",
                border: "rgba(16,185,129,0.3)",
                color: "#10b981",
              },
              {
                label: "React.js",
                bg: "rgba(139,92,246,0.1)",
                border: "rgba(139,92,246,0.3)",
                color: "#8b5cf6",
              },
              {
                label: "Node.js",
                bg: "rgba(234,179,8,0.1)",
                border: "rgba(234,179,8,0.3)",
                color: "#ca8a04",
              },
              {
                label: "Redis",
                bg: "rgba(234,179,8,0.1)",
                border: "rgba(234,0,0,0.3)",
                color: "#ff0000",
              },
            ].map(({ label, bg, border, color }) => (
              <span
                key={label}
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: bg, border: `1px solid ${border}`, color }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="fade-up delay-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build full-stack web applications with real-world features like
            authentication, messaging, and notification systems. Focused on
            creating scalable, clean, and user-friendly products.
          </p>

          {/* Subtext */}
          <p className="fade-up delay-4 text-sm text-slate-500 dark:text-slate-500">
            A B.Tech ( IT ) graduate • Open to MERN &amp; Next.js roles
          </p>

          {/* CTA buttons */}
          <div className="fade-up delay-5 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate("/projects")}
              className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                boxShadow: "0 6px 20px rgba(236,72,153,0.35)",
              }}
            >
              View Projects
            </button>

            <a
              href={Resume}
              download
              className="px-8 py-3.5 rounded-xl font-semibold text-center transition-all hover:-translate-y-0.5 text-slate-700 dark:text-slate-300"
              style={{ border: "2px solid #e2e8f0" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ec4899";
                e.currentTarget.style.color = "#ec4899";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.color = "";
              }}
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* ── RIGHT IMAGE ── */}
        <div className="flex justify-center items-center fade-left delay-3">
          <div className="relative">
            {/* Glow blur behind image */}
            <div
              className="absolute inset-0 rounded-full scale-110"
              style={{
                background:
                  "radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />

            {/* Gradient ring */}
            <div
              className="relative rounded-full p-1"
              style={{
                background:
                  "linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)",
                boxShadow: "0 0 40px rgba(236,72,153,0.3)",
              }}
            >
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={PortfolioPhoto}
                  alt="Vishal Tiwari"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div
              className="float-anim absolute -bottom-4 -left-6 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-900"
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}
            >
              🚀 MERN Stack
            </div>

            {/* Floating badge — top right */}
            <div
              className="float-anim absolute -top-4 -right-6 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-900"
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                animationDelay: "1.2s",
              }}
            >
              ⚡ Next.js
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 fade-up delay-6 flex flex-col items-center gap-1">
        <span className="text-xs text-slate-400 dark:text-slate-600 tracking-widest uppercase">
          scroll
        </span>
        <div className="w-px h-6 bg-linear-to-b from-slate-400 dark:from-slate-600 to-transparent" />
      </div>
    </section>
  );
}

export default HomePage;
