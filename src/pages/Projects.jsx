import React, { useState } from "react";
import webIcon from "../assets/web.png";
import arvrIcon from "../assets/arvr.jpg";
import blockchainIcon from "../assets/blockchain.jpg";
import genaiIcon from "../assets/genai.webp";
import mlIcon from "../assets/ml.webp";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectCategories = [
    {
      title: "Web Development Projects",
      icon: webIcon,
      projects: [
        {
          name: "Education Website",
          description:
            "A responsive e-learning platform with course management and student dashboard.",
          tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
          code: "#",
          live: "#",
        },
        {
          name: "E-Commerce Website",
          description:
            "An online store with secure payment gateway and product recommendation system.",
          tech: ["Next.js", "Stripe API", "MySQL", "Redux"],
          code: "#",
          live: "#",
        },
        {
          name: "Medical Website",
          description:
            "A telemedicine platform for booking appointments and managing health records.",
          tech: ["React.js", "Express.js", "PostgreSQL", "Bootstrap"],
          code: "#",
          live: "#",
        },
      ],
    },
    {
      title: "AR / VR Projects",
      icon: arvrIcon,
      projects: [
        {
          name: "3D Model Viewer",
          description:
            "An AR-based 3D product visualization tool for real-time product preview.",
          tech: ["Three.js", "WebXR", "Blender", "React"],
          code: "#",
          live: "#",
        },
        {
          name: "Virtual Campus Tour",
          description:
            "An interactive VR tour of a university campus with immersive experience.",
          tech: ["Unity3D", "C#", "Oculus SDK"],
          code: "#",
          live: "#",
        },
      ],
    },
    {
      title: "Blockchain Projects",
      icon: blockchainIcon,
      projects: [
        {
          name: "Transparent Donation System",
          description:
            "A blockchain-based donation tracking system for NGOs.",
          tech: ["Solidity", "Ethereum", "Hardhat", "React"],
          code: "#",
          live: "#",
        },
        {
          name: "NFT Marketplace",
          description:
            "A platform to mint, buy, and sell NFTs with Metamask integration.",
          tech: ["Solidity", "IPFS", "Web3.js", "Next.js"],
          code: "#",
          live: "#",
        },
      ],
    },
    {
      title: "GenAI Projects",
      icon: genaiIcon,
      projects: [
        {
          name: "AI Content Generator",
          description:
            "A GenAI tool to generate blog articles and marketing content.",
          tech: ["LangChain", "OpenAI API", "Next.js"],
          code: "#",
          live: "#",
        },
        {
          name: "AI Chatbot",
          description:
            "A context-aware chatbot for customer support.",
          tech: ["Dialogflow", "OpenAI GPT-4", "React"],
          code: "#",
          live: "#",
        },
      ],
    },
    {
      title: "Machine Learning Projects",
      icon: mlIcon,
      projects: [
        {
          name: "Fake Review Detection",
          description:
            "A machine learning model to detect fake product reviews.",
          tech: ["Python", "Scikit-Learn", "Flask"],
          code: "#",
          live: "#",
        },
        {
          name: "PPE Violation Detection",
          description:
            "A YOLO-based system to detect PPE violations in workplaces.",
          tech: ["YOLOv5", "OpenCV", "TensorFlow"],
          code: "#",
          live: "#",
        },
      ],
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 font-sans relative min-h-screen bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0e0e0e]"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg">
          PROJECTS
        </h2>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Explore my projects, categorized by technologies and domains.
        </p>
      </div>

      {/* Single Row Horizontal Scroll */}
      <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800">
        {projectCategories.map((category, idx) => (
          <div
            key={idx}
            className="min-w-[300px] bg-gradient-to-br from-purple-600/30 to-gray-800/50 border border-purple-400/30 rounded-2xl shadow-xl p-5 hover:shadow-purple-500/40 hover:scale-[1.05] transition-transform duration-300"
          >
            {/* Category Header */}
            <div className="flex flex-col items-center mb-4">
              <img
                src={category.icon}
                alt={category.title}
                className="h-16 w-16 rounded-xl shadow-lg border border-purple-400"
              />
              <h3 className="text-xl font-bold text-purple-300 mt-3 text-center">
                {category.title}
              </h3>
            </div>

            {/* Projects List */}
            {category.projects.map((project, i) => (
              <div
                key={i}
                onClick={() => handleOpenModal(project)}
                className="bg-gray-800/70 rounded-lg p-3 mb-3 hover:bg-purple-700/40 hover:shadow-md cursor-pointer transition-all duration-300"
              >
                <p className="text-base font-semibold text-white truncate">
                  {project.name}
                </p>
                <p className="text-xs text-gray-400 line-clamp-2 mt-1">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#10121a] rounded-xl shadow-2xl w-[95%] max-w-2xl overflow-hidden relative border border-purple-500">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-gray-400 hover:text-purple-400 text-2xl"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="p-6">
              <h3 className="text-3xl font-bold text-white mb-3">
                {selectedProject.name}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mb-5">
                {selectedProject.description}
              </p>

              <h4 className="text-purple-400 font-semibold mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-600/20 text-purple-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-gray-700 text-gray-300 py-2 rounded-md hover:bg-gray-600 transition-all"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-md hover:opacity-90 transition-all"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
