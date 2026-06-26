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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      <div className="max-w-6xl py-3 mx-auto">
        {/* HEADING */}
        <div className="mb-12 text-center fade-down delay-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Projects
          </h2>
          <p className="mt-2 text-gray-400">
            Real-world applications built using MERN and Next.js
          </p>
        </div>

        {/* 🔥 MAIN PROJECT */}
        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-16 fade-up delay-2">
          <img
            src={EaseWork}
            alt="MERN Social Platform"
            className="w-full h-46 sm:h-64 object-cover"
          />

          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">
              EaseWork – Team Collaboration & Project Management Platform
            </h3>

            <p className="text-gray-300">
              EaseWork is a full-stack SaaS-style project management platform
              designed to help organizations manage teams, projects, tasks, and
              communication from a single workspace. The platform supports
              role-based access control for managers and employees, project
              collaboration, task tracking, company management, team chat,
              notifications, media uploads, email automation, and payment
              integration.
            </p>

            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-2">
              <span className="skillTag">React</span>
              <span className="skillTag">Next.js</span>
              <span className="skillTag">Redis</span>
              <span className="skillTag">MongoDB</span>
              <span className="skillTag">Typescript</span>
              <span className="skillTag">REST APIs</span>
            </div>

            {/* BUTTON */}
            <a
              href="https://crm-tprb.vercel.app/"
              target="_blank"
              className="inline-block mt-2 px-5 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/*  SEPARATOR  */}
        <div className="mb-8 text-center fade-up delay-3">
          <h3 className="text-lg font-semibold text-gray-300">
            Other Projects
          </h3>
        </div>

        {/* 🔹 OTHER PROJECTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* MERN Stack Social Media Platform APP */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition fade-up delay-4">
            <img
              src={MERNApp}
              className="rounded-lg mb-3 w-full h-40 object-cover"
              alt="Tic Tac Toe"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              MERN Stack Social Platform
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              A full-stack social media application with authentication,
              real-time messaging, notifications, and post interactions. Built
              using React, Node.js, Express, and MongoDB with JWT
              authentication.
            </p>
            <a
              href="https://mern-stack-social-platform.vercel.app/"
              target="_blank"
              className="inline-block mt-2 text-pink-600 text-sm font-medium"
            >
              View Project →
            </a>
          </div>
          {/* MEMORIES APP */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition fade-up delay-5">
            <img
              src={TaskFlow}
              className="rounded-lg mb-3 w-full h-40 object-cover"
              alt="TaskFlow App"
            />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              TaskFlow – Full Stack Task Management Platform
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              A production-ready task management application built with Next.js,
              Express.js, Prisma ORM, MySQL, Redis, and Tailwind CSS featuring
              JWT authentication, OTP verification, secure CRUD operations,
              search & filtering, pagination, profile management, Cloudinary
              image uploads, and a responsive dark/light UI.
            </p>
            <a
              href="https://task-flow-full-stack-task-managemen-five.vercel.app/"
              target="_blank"
              className="inline-block mt-2 text-pink-600 text-sm font-medium"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
