import React from "react";

function Education() {
  return (
    <div className="mainDiv bg-transparent text-white  ">
      <div
        className="container max-w-5xl px-4 py-12 mx-auto"
        bis_skin_checked="1"
      >
        <div className="grid gap-10 mx-4 sm:grid-cols-12 " bis_skin_checked="1">
          <div className="col-span-12 sm:col-span-3" bis_skin_checked="1">
            <div
              className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600"
              bis_skin_checked="1"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                animation: "moveRight 0.8s linear 1 forwards",
              }}
            >
              <h3 className="text-3xl font-semibold">Education</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-[#ff014f]">
                My academic journey and transition into web development
              </span>
            </div>
          </div>
          <div
            className="relative col-span-12 px-4 space-y-6 sm:col-span-9"
            bis_skin_checked="1"
          >
            <div
              className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300"
              bis_skin_checked="1"
              style={{ animation: "moveLeft 0.8s linear 1 forwards" }}
            >
              <div
                className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#ff014f]"
                bis_skin_checked="1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h3 className="text-xl font-semibold tracking-wide">
                  B.Tech in Information Technology{" "}
                </h3>
                <time
                  className="text-xs tracking-wide uppercase dark:text-gray-600"
                  style={{ color: "#ff014f" }}
                >
                  2023 – 2026 (Expected)
                </time>
                <p className="mt-3" style={{ marginBottom: "20px" }}>
                  Final-year undergraduate student specializing in Information
                  Technology with a strong focus on frontend development.
                  Currently building practical skills in React, JavaScript, and
                  modern web technologies, while learning backend development
                  using the MERN stack to grow into a full-stack developer.
                </p>
              </div>
              <div
                className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#ff014f]"
                bis_skin_checked="1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <h3 className="text-xl font-semibold tracking-wide">
                  Diploma in Mechanical Engineering ( Automobile )
                </h3>
                <time
                  style={{ color: "#ff014f" }}
                  className="text-xs tracking-wide uppercase dark:text-gray-600"
                >
                  2019 – 2022
                </time>
                <p className="mt-3">
                  Completed a diploma in Mechanical Engineering, which helped
                  build strong problem-solving skills, logical thinking, and
                  discipline. This phase shaped my analytical mindset and
                  eventually led me to transition into software development,
                  where I now apply the same structured thinking to writing
                  clean and efficient code.
                </p>
              </div>
            </div>
            <h2
              style={{
                color: "pink",
                marginTop: "50px",
                animation: "moveUp 0.8s ease-in 1 forwards",
                fontStyle: "italic",
              }}
              className="text-lg font-semibold"
            >
              " My academic journey reflects my transition from core engineering
              to modern software development, driven by continuous learning and
              hands-on project building. "
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
