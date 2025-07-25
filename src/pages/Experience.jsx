import React, { useState } from "react";
import Marquee from "react-fast-marquee";

// ✅ Example Company Logos
import drdoLogo from "../assets/drdo.png";
import yhillsLogo from "../assets/yhills.png";
import sajawaatLogo from "../assets/sajawaat.jpeg";
import codsoftLogo from "../assets/codsoft.png";
import teachnookLogo from "../assets/teachnook.png";
import globalLogo from "../assets/global.webp";
import clubLogo from "../assets/club.jpg";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  const experiences = [
    {
      title: "AI/ML Intern",
      company: "Global Infoventures Pvt. Ltd.",
      logo: globalLogo,
      duration: "Feb 2025 - Present · 6 mos",
      location: "Noida, India",
      type: "Full-time · On-site",
      description: `Working on advanced AI systems, integrating LLMs, Redis, and YOLO-based object detection with scalable architecture using Docker & Kubernetes.`,
      skills: [
        "Python", "Machine Learning", "AI", "OpenCV", "YOLO", "Docker",
        "LLMs", "Redis", "Milvus", "Git", "Prompt Engineering",
      ],
    },
    {
      title: "President",
      company: "BIT BRAIN CLUB",
      logo: clubLogo,
      duration: "Jul 2024 - Present · 1 yr 1 mo",
      location: "Ghaziabad, India",
      type: "Full-time · On-site",
      description: `Fostering innovation with hands-on sessions on AI, cybersecurity, and emerging IT domains.`,
      skills: ["Leadership", "Event Management", "Information Security", "Team Building"],
    },
    {
      title: "Intern | Quantum Computing & Machine Learning",
      company: "DRDO, Ministry of Defence",
      logo: drdoLogo,
      duration: "Jul 2024 - Dec 2024 · 6 mos",
      location: "Delhi · Hybrid",
      type: "Internship",
      description: `Researched Quantum Machine Learning using Qiskit & PennyLane under Scientist 'E' guidance.`,
      skills: ["Python", "Qiskit", "PennyLane", "Cirq", "Quantum Kernel Training"],
    },
    {
      title: "Intern | Machine Learning with Python",
      company: "YHills",
      logo: yhillsLogo,
      duration: "Mar 2024 - Apr 2024 · 2 mos",
      location: "Remote",
      type: "Internship",
      description: `Hands-on experience in classical ML models, feature engineering, and data visualization techniques.`,
      skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"],
    },
    {
      title: "AR Development Intern",
      company: "Sajawaat Home",
      logo: sajawaatLogo,
      duration: "Jun 2023 - Aug 2023 · 3 mos",
      location: "Hybrid",
      type: "Internship",
      description: `Developed interactive AR experiences & 3D models for marketing campaigns using Blender & Unity.`,
      skills: ["AR.js", "Blender", "Unity", "WebXR"],
    },
    {
      title: "Web Developer",
      company: "CodSoft",
      logo: codsoftLogo,
      duration: "Dec 2023 - Jan 2024 · 2 mos",
      location: "Ghaziabad, India",
      type: "Internship",
      description: `Built responsive web apps with MERN stack, optimized for performance & SEO.`,
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js", "React"],
    },
    {
      title: "Blockchain Developer",
      company: "TEACHNOOK",
      logo: teachnookLogo,
      duration: "May 2023 - Jul 2023 · 3 mos",
      location: "Ghaziabad, India",
      type: "Trainee",
      description: `Trained in blockchain technologies, including smart contracts and Ethereum-based development.`,
      skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "Blockchain"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 px-[6vw] font-[Poppins] text-white bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0e0e0e] min-h-[100vh]"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg tracking-wide">
        EXPERIENCE
      </h2>

      {/* 🔁 Marquee for Experience Boxes */}
      <Marquee gradient={false} speed={50} pauseOnHover className="space-x-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            onClick={() => setSelectedExp(exp)}
            className="bg-white/10 backdrop-blur-xl border border-gray-700 rounded-2xl w-[300px] h-[450px] p-5 mx-4 flex flex-col items-center justify-start text-center gap-2 transition-all duration-300 hover:scale-[1.08] hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] cursor-pointer"
          >
            {/* Logo in Stylish Box */}
            <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-purple-500 shadow-lg hover:shadow-purple-400 transition duration-300">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-purple-400 mt-2">{exp.title}</h3>
            <p className="text-sm text-gray-300">{exp.company}</p>
            <p className="text-xs text-gray-400">{exp.duration}</p>
            <p className="text-xs italic text-gray-500">{exp.location} · {exp.type}</p>
            <p className="text-xs text-gray-400 mt-1 line-clamp-4">{exp.description}</p>
          </div>
        ))}
      </Marquee>

      {/* ✅ Modal for Detailed View */}
      {selectedExp && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedExp(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0e0e0e] rounded-2xl p-6 max-w-lg w-full border border-purple-500 shadow-2xl text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-3 right-4 text-gray-300 hover:text-pink-400 text-2xl"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-purple-500">
                <img
                  src={selectedExp.logo}
                  alt={selectedExp.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-400">{selectedExp.title}</h3>
                <p className="text-sm text-gray-300">{selectedExp.company}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-3">{selectedExp.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {selectedExp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-500/20 border border-purple-400 text-white px-3 py-1 rounded-full text-xs hover:bg-purple-500 hover:text-black transition duration-200"
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

export default Experience;
