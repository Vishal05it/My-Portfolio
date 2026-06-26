import React from "react";
import MERNApp from "../assets/MERN App.jpg";
import ReactTicTacToe from "../assets/TicTacToeReact.png";
import Banking from "../assets/Banking.png";
import Memories from "../../Memories.jpg";
import BlogApp from "../assets/BlogApp.jpeg";
import EaseWork from "../assets/5.jpg";
import TaskFlow from "../assets/TaskFlow.jpg";
function Projects() {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden"
      style={{ background: "#020617" }}
    >
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto py-10 relative">
        {/* ── HEADING ── */}
        <div className="mb-16 text-center fade-down delay-1">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              background: "rgba(236,72,153,0.1)",
              border: "1px solid rgba(236,72,153,0.25)",
              color: "#ec4899",
            }}
          >
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-lg mx-auto">
            Real-world applications built using MERN and Next.js
          </p>
        </div>

        {/* ── FEATURED PROJECT ── */}
        <div
          className="rounded-2xl overflow-hidden mb-16 fade-up delay-2 group"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={EaseWork}
              alt="EaseWork Platform"
              className="w-full h-52 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #0f172a 0%, rgba(15,23,42,0.3) 50%, transparent 100%)",
              }}
            />
            {/* Featured badge */}
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                  boxShadow: "0 4px 14px rgba(236,72,153,0.4)",
                }}
              >
                ⭐ Featured Project
              </span>
            </div>
          </div>

          {/* Content */}
          <div
            className="p-6 sm:p-8 space-y-4"
            style={{ background: "#0f172a" }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              EaseWork – Team Collaboration &amp; Project Management Platform
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              EaseWork is a full-stack SaaS-style project management platform
              designed to help organizations manage teams, projects, tasks, and
              communication from a single workspace. The platform supports
              role-based access control for managers and employees, project
              collaboration, task tracking, company management, team chat,
              notifications, media uploads, email automation, and payment
              integration.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Redis",
                "MongoDB",
                "Typescript",
                "REST APIs",
              ].map((tag) => (
                <span key={tag} className="projectTag">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://crm-tprb.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                boxShadow: "0 4px 18px rgba(236,72,153,0.35)",
              }}
            >
              Live Demo →
            </a>
          </div>
        </div>

        {/* ── SEPARATOR ── */}
        <div className="mb-10 fade-up delay-3">
          <div className="flex items-center gap-4">
            <div
              className="flex-1 h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.12))",
              }}
            />
            <h3 className="text-sm font-semibold text-slate-500 px-4 tracking-wider uppercase">
              Other Projects
            </h3>
            <div
              className="flex-1 h-px"
              style={{
                background:
                  "linear-gradient(to left, transparent, rgba(255,255,255,0.12))",
              }}
            />
          </div>
        </div>

        {/* ── OTHER PROJECTS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* MERN Stack Social Media */}
          <div
            className="rounded-2xl overflow-hidden transition-all duration-300 fade-up delay-4 group cursor-default"
            style={{
              background: "#0f172a",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(236,72,153,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
            }
          >
            <div className="relative overflow-hidden">
              <img
                src={MERNApp}
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                alt="MERN Social Platform"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%)",
                }}
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-white">
                MERN Stack Social Platform
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                A full-stack social media application with authentication,
                real-time messaging, notifications, and post interactions. Built
                using React, Node.js, Express, and MongoDB with JWT
                authentication.
              </p>
              <a
                href="https://mern-stack-social-platform.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "#ec4899" }}
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Memories App */}
          <div
            className="rounded-2xl overflow-hidden transition-all duration-300 fade-up delay-5 group cursor-default"
            style={{
              background: "#0f172a",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
            }
          >
            <div className="relative overflow-hidden">
              <img
                src={TaskFlow}
                className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Memories App"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%)",
                }}
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-white">
                TaskFlow – Full Stack Task Management Platform
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                A production-ready task management application built with
                Next.js, Express.js, Prisma ORM, MySQL, Redis, and Tailwind CSS
                featuring JWT authentication, OTP verification, secure CRUD
                operations, search & filtering, pagination, profile management,
                Cloudinary image uploads, and a responsive dark/light UI.
              </p>
              <a
                href="https://task-flow-full-stack-task-managemen-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "#8b5cf6" }}
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
