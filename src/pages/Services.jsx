import React from "react";
import {
  FaCode,
  FaBrain,
  FaGlobe,
  FaVrCardboard,
  FaCubes,
  FaRobot,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode className="text-purple-400 text-5xl mb-3" />,
      title: "Full Stack Development",
      desc: "Scalable, secure, and high-performance web applications using MERN stack & modern frontend frameworks.",
    },
    {
      icon: <FaBrain className="text-pink-400 text-5xl mb-3" />,
      title: "AI & Machine Learning",
      desc: "Building intelligent models for automation, predictive analytics, and real-world problem-solving.",
    },
    {
      icon: <FaRobot className="text-blue-400 text-5xl mb-3" />,
      title: "Generative AI Development",
      desc: "Developing AI-powered chatbots, content generation tools, and innovative GenAI applications.",
    },
    {
      icon: <FaVrCardboard className="text-green-400 text-5xl mb-3" />,
      title: "AR/VR Development",
      desc: "Immersive augmented & virtual reality solutions for education, gaming, and interactive experiences.",
    },
    {
      icon: <FaCubes className="text-yellow-400 text-5xl mb-3" />,
      title: "3D Modeling & Visualization",
      desc: "Creating realistic 3D models & animations for product design, architectural visualization, and AR/VR apps.",
    },
    {
      icon: <FaGlobe className="text-purple-300 text-5xl mb-3" />,
      title: "Web Design & Optimization",
      desc: "Responsive, SEO-friendly, and performance-optimized websites with modern UX/UI trends.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 px-[6vw] bg-gradient-to-r from-gray-900 via-[#1a1a2e] to-[#16213e] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-12">
        My Services
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center shadow-[0_5px_15px_rgba(130,69,236,0.3)] hover:scale-105 hover:shadow-[0_10px_30px_rgba(168,85,247,0.5)] transition duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-bold text-purple-300">{service.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
