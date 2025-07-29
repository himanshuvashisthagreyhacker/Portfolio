import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../assets/h1.jpg";

// ✅ Import Pages
import About from "../pages/About";
import Services from "../pages/Services";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Projects from "../pages/Projects";

const Home = () => {
  return (
    <>
      {/* ✅ Home Section */}
      <section
        id="home"
        className="py-12 px-[6vw] md:px-[10vw] font-sans mt-8 md:mt-14"
      >
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between md:gap-4">
          {/* ✅ Left Side */}
          <div className="md:w-[55%] text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Hello, I’m
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
              Himanshu Vashistha
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-[#8245ec]">
              <span className="text-white">I'm a </span>
              <Typewriter
                words={[
                  "React Developer",
                  "Full Stack Developer",
                  "AI/ML Developer",
                  "GenAI Programmer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h3>

            <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
              I’m a passionate developer with a strong foundation in the{" "}
              <span className="text-[#8245ec] font-medium">MERN stack</span>,
              dedicated to building fast, responsive, and scalable web
              applications. My work blends{" "}
              <span className="text-[#8245ec] font-medium">
                creative frontend design
              </span>{" "}
              with{" "}
              <span className="text-[#8245ec] font-medium">
                robust backend engineering
              </span>
              . I actively explore the power of{" "}
              <span className="text-[#8245ec] font-medium">Machine Learning</span>,{" "}
              <span className="text-[#8245ec] font-medium">Generative AI</span>, and{" "}
              <span className="text-[#8245ec] font-medium">automation</span> to
              create intelligent digital solutions.
            </p>

            {/* ✅ Resume Button */}
            <a
              href="https://drive.google.com/file/d/1ZVvw3jSS8TCJtTFpTA_daU_lCidPTzxK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full text-base sm:text-lg font-bold transition duration-300 hover:scale-110 tracking-wide"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 5px #8245ec, 0 0 10px #a855f7, 0 0 25px #8245ec",
              }}
            >
              VIEW RESUME
            </a>
          </div>

          {/* ✅ Right Side */}
          <div className="md:w-[40%] flex justify-center md:justify-end mb-6 md:mb-0">
            <Tilt
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.03}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Himanshu Vashistha"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.4)]"
              />
            </Tilt>
          </div>
        </div>
      </section>

      {/* ✅ Added Pages */}
      <About />
      <Services />
      <Projects />
      
      {/* ✅ Existing Sections */}
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
