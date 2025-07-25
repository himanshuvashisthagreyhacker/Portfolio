import React, { useState } from "react";
import Marquee from "react-fast-marquee";

// ✅ Example Logos (replace with actual images)
import abesLogo from "../assets/abes.jpeg";
import bbssmLogo from "../assets/bbssm.webp";

const Education = () => {
  const [selectedEdu, setSelectedEdu] = useState(null);

  const educationData = [
    {
      title: "B.Tech Computer Science (Information Technology)",
      institution: "ABES Institute of Technology",
      logo: abesLogo,
      duration: "Nov 2021 - Jun 2025",
      location: "Ghaziabad, Uttar Pradesh, India",
      level: "Bachelor's Degree",
      description: `Participating in technical events 🏆. Member of Bit Brain Club 🧠. Volunteered in coding workshops 🖥️ and cultural fests 🎶.`,
      fullDetails: `B.Tech students actively participate in technical competitions 🏆, collaborate on innovative projects with Bit Brain Club 🧠, organize and volunteer for hackathons 🖥️, and contribute to campus life through event design 🎨 and technical seminars 💻.`,
      skills: [
        "C++", "Python", "C", "Java", "HTML", "CSS", "Flask", "MongoDB", "SQL",
        "Machine Learning", "Blockchain", "Ethereum", "Sports", "Volunteering"
      ],
    },
    {
      title: "Intermediate School (Science)",
      institution: "B.B.S.S.M Inter College",
      logo: bbssmLogo,
      duration: "Mar 2020 - Mar 2021",
      location: "Meerut, Uttar Pradesh, India",
      level: "Intermediate",
      description: `Active in Science Club 🔬, Math Olympiad 🧮, Drama Club 🎭, and Robotics 🤖.`,
      fullDetails: `Intermediate school included wide exposure to scientific, cultural, and leadership roles — from robotics 🤖 and chess ♟️ to theater 🎭 and coding 💻.`,
      skills: ["Graphic Design", "Robotics", "Coding", "Leadership", "Creativity"],
    },
    {
      title: "High School",
      institution: "B.B.S.S.M Inter College",
      logo: bbssmLogo,
      duration: "Mar 2018 - Mar 2019",
      location: "Meerut, Uttar Pradesh, India",
      level: "High School",
      description: `Athletics 🏃‍♂️, Art 🎨, Debate 🗣️, Environmental Club 🌱, and Volunteering 🤝.`,
      fullDetails: `My high school journey included being an active part of athletics 🏃‍♂️ and art 🎨 clubs. I led sustainability initiatives 🌱 and volunteered 🤝 for social campaigns, alongside debate society 🗣️ for communication development.`,
      skills: ["Team Leadership", "Creativity", "Public Speaking", "Sustainability", "Sports"],
    },
  ];

  return (
    <section
      id="education"
      className="py-16 px-[6vw] font-[Poppins] text-white bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0e0e0e] min-h-[100vh]"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-lg tracking-wide">
        EDUCATION
      </h2>

      {/* 🔁 Marquee for Education Boxes */}
      <Marquee gradient={false} speed={50} pauseOnHover className="space-x-10">
        {educationData.map((edu, index) => (
          <div
            key={index}
            onClick={() => setSelectedEdu(edu)}
            className="bg-white/10 backdrop-blur-xl border border-gray-700 rounded-2xl w-[300px] h-[450px] p-5 mx-4 flex flex-col items-center text-center gap-2 transition-all duration-300 hover:scale-[1.08] hover:border-teal-400 hover:shadow-[0_0_25px_rgba(45,212,191,0.6)] cursor-pointer"
          >
            {/* Logo in Stylish Box */}
            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-teal-400 shadow-lg hover:shadow-teal-300 transition duration-300">
              <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-bold text-teal-400 mt-2">{edu.title}</h3>
            <p className="text-sm text-gray-300">{edu.institution}</p>
            <p className="text-xs text-gray-400">{edu.duration}</p>
            <p className="text-xs italic text-gray-500">{edu.location} · {edu.level}</p>
            <p className="text-xs text-gray-400 mt-1 line-clamp-4">{edu.description}</p>
          </div>
        ))}
      </Marquee>

      {/* ✅ Modal for Detailed View */}
      {selectedEdu && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedEdu(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0e0e0e] rounded-2xl p-6 max-w-lg w-full border border-teal-400 shadow-2xl text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEdu(null)}
              className="absolute top-3 right-4 text-gray-300 hover:text-blue-400 text-2xl"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-teal-400">
                <img src={selectedEdu.logo} alt={selectedEdu.institution} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-400">{selectedEdu.title}</h3>
                <p className="text-sm text-gray-300">{selectedEdu.institution}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-3">{selectedEdu.fullDetails}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {selectedEdu.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-teal-500/20 border border-teal-400 text-white px-3 py-1 rounded-full text-xs hover:bg-teal-500 hover:text-black transition duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
