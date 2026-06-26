import React from "react";
import { GraduationCap, BookOpen, Sparkles } from "lucide-react";

function Education() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 min-h-screen overflow-hidden">

      <div className="max-w-4xl mx-auto py-10">

        {/* ── HEADING ── */}
        <div className="mb-16 text-center fade-down delay-1">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              background: "rgba(236,72,153,0.08)",
              border: "1px solid rgba(236,72,153,0.25)",
              color: "#ec4899",
            }}
          >
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-base max-w-lg mx-auto">
            My academic journey and transition into software development
          </p>
        </div>

        {/* ── TIMELINE ── */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div
            className="absolute left-6 sm:left-7 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(to bottom, #ec4899, #8b5cf6, #3b82f6)" }}
          />

          <div className="space-y-10">

            {/* B.TECH */}
            <div className="relative pl-16 sm:pl-20 fade-right delay-2">
              {/* Timeline icon */}
              <div
                className="absolute left-2.5 sm:left-3.5 top-4 w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                  boxShadow: "0 0 0 4px rgba(236,72,153,0.15)",
                }}
              >
                <GraduationCap size={15} className="text-white" />
              </div>

              <div
                className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    B.Tech in Information Technology
                  </h3>
                  <span
                    className="self-start sm:self-auto shrink-0 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(236,72,153,0.1)",
                      border: "1px solid rgba(236,72,153,0.25)",
                      color: "#ec4899",
                    }}
                  >
                    2023 – 2026
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  Fresher B.Tech graduate with hands-on experience in full-stack web
                  development. Built real-world applications using the MERN stack,
                  focusing on authentication, caching, notifications, messaging
                  systems, and scalable backend design.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["MERN Stack", "Full Stack Dev", "Next.js", "REST APIs"].map(tag => (
                    <span key={tag} className="skillTag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* DIPLOMA */}
            <div className="relative pl-16 sm:pl-20 fade-right delay-3">
              <div
                className="absolute left-2.5 sm:left-3.5 top-4 w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  boxShadow: "0 0 0 4px rgba(59,130,246,0.15)",
                }}
              >
                <BookOpen size={15} className="text-white" />
              </div>

              <div
                className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                    Diploma in Mechanical Engineering (Automobile)
                  </h3>
                  <span
                    className="self-start sm:self-auto shrink-0 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(59,130,246,0.1)",
                      border: "1px solid rgba(59,130,246,0.25)",
                      color: "#3b82f6",
                    }}
                  >
                    2019 – 2022
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  Developed strong problem-solving skills and analytical thinking
                  through core engineering concepts. This foundation helped
                  transition into software development with a structured and logical
                  approach.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Problem Solving", "Analytical Thinking", "Engineering"].map(tag => (
                    <span key={tag} className="skillTag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── QUOTE ── */}
        <div className="mt-16 text-center fade-up delay-4">
          <div
            className="glass-card rounded-2xl px-8 py-7 max-w-2xl mx-auto relative"
          >
            <Sparkles
              size={18}
              className="absolute top-4 right-5 text-pink-400 opacity-60"
            />
            <span
              className="block text-5xl font-serif leading-none mb-2 gradient-text"
              style={{ WebkitTextFillColor: "unset" }}
            >
              "
            </span>
            <p className="italic text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              My journey reflects a transition from core engineering to software
              development, driven by curiosity, consistency, and real-world
              project building.
            </p>
            <span
              className="block text-5xl font-serif leading-none mt-2 gradient-text"
              style={{ WebkitTextFillColor: "unset" }}
            >
              "
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
