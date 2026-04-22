import React from "react";
import { FaLinkedin, FaGlobe, FaEnvelope, FaGithubAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
function SocialMedia() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl py-10 mx-auto">
        {/* HEADING */}
        <div className="mb-12 text-center fade-down delay-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
            Connect With Me
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            Explore my work, projects, and professional profiles
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/vishal-tiwari-17684822a"
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard fade-up delay-2"
          >
            <FaLinkedin size={28} className="text-blue-600" />
            <h3>LinkedIn</h3>
            <p>Professional profile and career updates</p>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Vishal05it"
            target="_blank"
            rel="noopener noreferrer"
            className="socialCard fade-up delay-3"
          >
            {/* <i class="fa-brands fa-github"></i> */}
            <SiGithub size={28} className="text-gray-800 dark:text-blue" />
            <h3>GitHub</h3>
            <p>Explore my projects and code repositories</p>
          </a>

          {/* PORTFOLIO */}
          <a href="/" className="socialCard fade-up delay-4">
            <FaGlobe size={28} className="text-pink-600" />
            <h3>Portfolio</h3>
            <p>View my deployed projects and work</p>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:www.vishal.tiwari007@gmail.com"
            className="socialCard fade-up delay-5"
          >
            <FaEnvelope size={28} className="text-red-500" />
            <h3>Email</h3>
            <p>Contact me directly for opportunities</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
