import React from "react";
import { useNavigate } from "react-router-dom";
import PortfolioPhoto from "./Styles/Portfolio Photo.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="pt-20 sm:pt-24 min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Greeting */}
          <h5 className="fade-down delay-1 text-gray-100 dark:text-gray-100 text-sm sm:text-base">
            Hi, I'm Vishal{" "}
            <span className="inline-block animate-bounce">👋</span>
          </h5>

          {/* Main Heading */}
          <h1 className="fade-up delay-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
            Full Stack <span className="text-pink-600">MERN Developer</span>
          </h1>

          {/* Description */}
          <p className="fade-up delay-3 text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            I build full-stack web applications with real-world features like
            authentication, messaging, and notification systems. Focused on
            creating scalable, clean, and user-friendly products.
          </p>

          {/* Subtext */}
          <p className="fade-up delay-4 text-sm text-gray-500 dark:text-gray-400">
            Final-year B.Tech IT student • Open to Frontend & MERN roles
          </p>

          {/* CTA */}
          <div className="fade-up delay-5 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate("/projects")}
              className="px-6 py-3 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 transition shadow-md hover:shadow-lg"
            >
              View Projects
            </button>

            <a
              href="./Vishal_Updated_Resume.pdf"
              download
              className="px-6 py-3 border border-pink-600 text-pink-600 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition text-center hover:border-black"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center fade-left delay-3">
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
            <img
              src={PortfolioPhoto}
              alt="Vishal Tiwari"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
