import React from "react";
import { FaLaptopCode, FaBrain, FaCloud, FaRobot } from "react-icons/fa";
import profileImage from "../assets/h1.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-[6vw] bg-gradient-to-r from-gray-900 via-[#1a1a2e] to-[#16213e] text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* ✅ Left - Profile Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={profileImage}
            alt="Himanshu Vashistha"
            className="rounded-2xl shadow-[0_10px_30px_rgba(130,69,236,0.4)] hover:scale-105 transition duration-300 border-4 border-purple-600"
          />
        </div>

        {/* ✅ Right - About Content */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4 text-lg">
            Hi, I’m{" "}
            <span className="text-purple-400 font-semibold">
              Himanshu Vashistha
            </span>
            , a passionate{" "}
            <span className="text-purple-500 font-bold">Full Stack Developer</span>{" "}
            and{" "}
            <span className="text-purple-500 font-bold">AI/ML Enthusiast</span>.
            I build{" "}
            <strong className="text-pink-400">
              scalable, secure, and visually stunning web applications
            </strong>{" "}
            while exploring cutting-edge technologies like{" "}
            <span className="text-purple-400 font-medium">
              Generative AI, Cloud Computing, and Quantum Machine Learning
            </span>.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            With experience in{" "}
            <strong className="text-purple-400">MERN stack</strong>,{" "}
            <strong className="text-purple-400">Machine Learning</strong>, and{" "}
            <strong className="text-purple-400">blockchain development</strong>,
            I aim to create{" "}
            <span className="text-pink-400 font-semibold">
              intelligent, innovative, and user-friendly digital solutions
            </span>{" "}
            that solve real-world problems.
          </p>

          {/* ✅ Icons - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 hover:scale-105 transition duration-300">
              <FaLaptopCode className="text-purple-400 text-2xl" />
              <p className="text-sm">
                <span className="font-bold text-white">Full Stack Web Development</span> using
                React, Node.js & MongoDB
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 hover:scale-105 transition duration-300">
              <FaBrain className="text-pink-400 text-2xl" />
              <p className="text-sm">
                <span className="font-bold text-white">AI & Machine Learning</span> for intelligent apps
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 hover:scale-105 transition duration-300">
              <FaCloud className="text-blue-400 text-2xl" />
              <p className="text-sm">
                Cloud Deployment & Scalable Architecture on AWS & Firebase
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 hover:scale-105 transition duration-300">
              <FaRobot className="text-green-400 text-2xl" />
              <p className="text-sm">
                Researching{" "}
                <span className="font-bold text-white">
                  Quantum Computing & Generative AI
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
