import React from "react";

function Skills() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl py-10 mx-auto">
        {/* HEADING */}
        <div className="mb-12 text-center lg:text-left fade-down delay-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            Technologies I use to build full-stack applications
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* FRONTEND */}
          <div className="skillCard fade-up delay-2">
            <h3 className="skillTitle">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skillTag">HTML5</span>
              <span className="skillTag">CSS3</span>
              <span className="skillTag">JavaScript (ES6+)</span>
              <span className="skillTag">React.js</span>
              <span className="skillTag">Context API</span>
              <span className="skillTag">Tailwind CSS</span>
            </div>
          </div>

          {/* BACKEND */}
          <div className="skillCard fade-up delay-3">
            <h3 className="skillTitle">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skillTag">Node.js</span>
              <span className="skillTag">Express.js</span>
              <span className="skillTag">MongoDB</span>
              <span className="skillTag">Mongoose</span>
              <span className="skillTag">REST APIs</span>
              <span className="skillTag">JWT Authentication</span>
            </div>
          </div>

          {/* CS FUNDAMENTALS */}
          <div className="skillCard fade-up delay-4">
            <h3 className="skillTitle">Programming & CS</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skillTag">Java</span>
              <span className="skillTag">OOP</span>
              <span className="skillTag">Data Structures</span>
              <span className="skillTag">Problem Solving</span>
            </div>
          </div>

          {/* TOOLS */}
          <div className="skillCard fade-up delay-5">
            <h3 className="skillTitle">Tools & Deployment</h3>
            <div className="flex flex-wrap gap-2">
              <span className="skillTag">Git</span>
              <span className="skillTag">GitHub</span>
              <span className="skillTag">VS Code</span>
              <span className="skillTag">Vercel</span>
              <span className="skillTag">Render</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
