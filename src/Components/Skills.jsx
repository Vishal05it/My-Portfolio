import React from "react";
import { Code2, Server, Cpu, Wrench } from "lucide-react";

function Skills() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto py-10 relative">
        {/* ── HEADING ── */}
        <div className="mb-16 text-center fade-down delay-1">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.25)",
              color: "#8b5cf6",
            }}
          >
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-base max-w-lg mx-auto">
            Technologies I use to build full-stack applications
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* FRONTEND */}
          <div className="skillCard fade-up delay-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #ec4899, #f43f5e)",
                  boxShadow: "0 4px 14px rgba(236,72,153,0.3)",
                }}
              >
                <Code2 size={20} className="text-white" />
              </div>
              <h3 className="skillTitle">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skillTag">HTML5</span>
              <span className="skillTag">CSS3</span>
              <span className="skillTag">JavaScript (ES6+)</span>
              <span className="skillTag">React.js</span>
              <span className="skillTag">Next.js</span>
              <span className="skillTag">Context API</span>
              <span className="skillTag">Typescript</span>
              <span className="skillTag">Tailwind CSS</span>
            </div>
          </div>

          {/* BACKEND */}
          <div className="skillCard fade-up delay-3">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                  boxShadow: "0 4px 14px rgba(139,92,246,0.3)",
                }}
              >
                <Server size={20} className="text-white" />
              </div>
              <h3 className="skillTitle">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skillTag">Next.js</span>
              <span className="skillTag">Node.js</span>
              <span className="skillTag">Express.js</span>
              <span className="skillTag">Redis</span>
              <span className="skillTag">MongoDB</span>
              <span className="skillTag">Mongoose</span>
              <span className="skillTag">MySQL</span>
              <span className="skillTag">Prisma ORM</span>
              <span className="skillTag">REST APIs</span>
              <span className="skillTag">JWT Authentication</span>
            </div>
          </div>

          {/* CS FUNDAMENTALS */}
          <div className="skillCard fade-up delay-4">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  boxShadow: "0 4px 14px rgba(59,130,246,0.3)",
                }}
              >
                <Cpu size={20} className="text-white" />
              </div>
              <h3 className="skillTitle">Programming &amp; CS</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skillTag">Java</span>
              <span className="skillTag">OOP</span>
              <span className="skillTag">Data Structures</span>
              <span className="skillTag">Problem Solving</span>
              <span className="skillTag">Caching</span>
            </div>
          </div>

          {/* TOOLS */}
          <div className="skillCard fade-up delay-5">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #10b981, #059669)",
                  boxShadow: "0 4px 14px rgba(16,185,129,0.3)",
                }}
              >
                <Wrench size={20} className="text-white" />
              </div>
              <h3 className="skillTitle">Tools &amp; Deployment</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="skillTag">Git</span>
              <span className="skillTag">GitHub</span>
              <span className="skillTag">VS Code</span>
              <span className="skillTag">Vercel</span>
              <span className="skillTag">Brevo Client</span>
              <span className="skillTag">Render</span>
              <span className="skillTag">Redis Cloud</span>
              <span className="skillTag">Railway (MySQL instance)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
