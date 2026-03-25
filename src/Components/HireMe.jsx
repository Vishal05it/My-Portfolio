import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function HireMe() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-3xl w-full text-center space-y-8">
        {/* HEADING */}
        <div className="fade-down">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Let’s Work Together
          </h1>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Full Stack MERN Developer | React | Node.js
          </p>
        </div>

        {/* ABOUT */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed fade-up delay-1">
          I’m Vishal Tiwari, a final-year B.Tech IT student and MERN stack
          developer. I build real-world web applications with features like
          authentication, messaging, and scalable backend systems. Currently
          looking for frontend or full-stack roles, paid internships, and
          opportunities to contribute to production-level applications.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up delay-2">
          {/* EMAIL */}
          <a
            href="mailto:vishal.tiwari007@gmail.com"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700 transition"
          >
            <FaEnvelope />
            Email Me
          </a>

          {/* CALL */}
          <a
            href="tel:+917007242112"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition border border-gray-600"
          >
            <FaPhoneAlt />
            Call Me
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/917007242112"
            target="_blank"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>

        {/* TRUST LINE */}
        <p className="text-sm text-gray-500 italic fade-up delay-3">
          “Focused on building real-world applications, not just tutorials.”
        </p>
      </div>
    </section>
  );
}

export default HireMe;
