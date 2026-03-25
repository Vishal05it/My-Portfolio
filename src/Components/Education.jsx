import React from "react";

function Education() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl py-10 mx-auto">
        {/* HEADING */}
        <div className="mb-12 text-center lg:text-left fade-down delay-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
            Education
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            My academic journey and transition into software development
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-6 space-y-10">
          {/* BTECH */}
          <div className="relative fade-right delay-2">
            <span className="absolute -left-[45px] top-2 w-4 h-4 bg-pink-600 rounded-full shadow-md"></span>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
              B.Tech in Information Technology
            </h3>

            <p className="text-sm text-pink-600 font-medium">
              2023 – 2026 (Expected)
            </p>

            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Final-year IT student with hands-on experience in full-stack web
              development. Built real-world applications using the MERN stack,
              focusing on authentication, messaging systems, and scalable
              backend design.
            </p>
          </div>

          {/* DIPLOMA */}
          <div className="relative fade-right delay-3">
            <span className="absolute -left-[45px] top-2 w-4 h-4 bg-pink-600 rounded-full shadow-md"></span>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
              Diploma in Mechanical Engineering (Automobile)
            </h3>

            <p className="text-sm text-pink-600 font-medium">2019 – 2022</p>

            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Developed strong problem-solving skills and analytical thinking
              through core engineering concepts. This foundation helped
              transition into software development with a structured and logical
              approach.
            </p>
          </div>
        </div>

        {/* QUOTE */}
        <div className="mt-12 text-center fade-up delay-4">
          <p className="italic text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            "My journey reflects a transition from core engineering to software
            development, driven by curiosity, consistency, and real-world
            project building."
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
