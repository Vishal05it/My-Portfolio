import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function HireMe() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "#020617" }}
    >
      {/* Background glows */}
      <div
        className="absolute top-0 left-0 w-125 h-125 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-100 h-100 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%)" }}
      />

      <div className="max-w-3xl w-full text-center space-y-8 relative z-10 py-20">

        {/* Open badge */}
        <div
          className="fade-down inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
          style={{
            background: "rgba(236,72,153,0.1)",
            border: "1px solid rgba(236,72,153,0.25)",
            color: "#ec4899",
          }}
        >
          <span
            className="w-2 h-2 rounded-full bg-green-400"
            style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
          />
          Open to Opportunities
        </div>

        {/* HEADING */}
        <div className="fade-down delay-1 space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Let's Work <span className="gradient-text">Together</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Full Stack MERN Developer | React | Node.js | Next.js
          </p>
        </div>

        {/* ABOUT CARD */}
        <div
          className="fade-up delay-1 rounded-2xl p-6 sm:p-8 text-left"
          style={{
            background: "rgba(15,23,42,0.8)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(10px)",
          }}
        >
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I'm Vishal Tiwari, a fresher B.Tech IT graduate and a MERN stack &amp;
            Next.js (full stack) developer. I build real-world web applications
            with features like notifications, caching, authentication, messaging,
            and scalable backend systems. Currently looking for frontend or
            full-stack roles, paid internships, and opportunities to contribute to
            production-level applications.
          </p>
        </div>

        {/* STATS */}
        <div className="fade-up delay-2 grid grid-cols-3 gap-4 max-w-xs mx-auto">
          {[
            { value: "5+",   label: "Projects" },
            { value: "3+",   label: "Years Learning" },
            { value: "100%", label: "Dedication" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="fade-up delay-2 flex flex-col sm:flex-row gap-4 justify-center">

          {/* EMAIL */}
          <a
            href="mailto:www.vishal.tiwari007@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #ec4899, #f43f5e)",
              boxShadow: "0 4px 18px rgba(236,72,153,0.35)",
            }}
          >
            <FaEnvelope />
            Email Me
          </a>

          {/* CALL */}
          <a
            href="tel:+917007242112"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "#1e293b",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#293548"}
            onMouseLeave={e => e.currentTarget.style.background = "#1e293b"}
          >
            <FaPhoneAlt />
            Call Me
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/917007242112"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              boxShadow: "0 4px 18px rgba(34,197,94,0.3)",
            }}
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>

        {/* TRUST LINE */}
        <p className="fade-up delay-3 text-sm text-slate-500 italic">
          "Focused on building real-world applications, not just tutorials."
        </p>

      </div>
    </section>
  );
}

export default HireMe;
