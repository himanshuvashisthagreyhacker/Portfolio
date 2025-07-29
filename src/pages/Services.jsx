import React, { useState } from "react";
import {
  FaCode,
  FaBrain,
  FaGlobe,
  FaVrCardboard,
  FaCubes,
  FaRobot,
} from "react-icons/fa";
import { Dialog } from "@headlessui/react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <FaCode className="text-purple-400 text-5xl mb-3" />,
      title: "Full Stack Development",
      desc: "Build secure, responsive web apps using MERN, Next.js & REST APIs.",
      longDesc:
        "We develop scalable full stack web applications using the latest tech such as React, Next.js, Node.js, MongoDB, and secure backend integrations. Perfect for startups and enterprise solutions.",
      image: "https://tse1.mm.bing.net/th/id/OIP.6Itqb1qdmXYh2bsaTD5BLAHaE8?w=600&h=400&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      icon: <FaBrain className="text-pink-400 text-5xl mb-3" />,
      title: "AI & Machine Learning",
      desc: "Intelligent models for automation, prediction, and smart systems.",
      longDesc:
        "Our AI/ML services include model training, natural language processing (NLP), computer vision, and advanced data analytics for businesses to gain real-time insights.",
      image: "https://images.idgesg.net/images/article/2018/01/emerging-tech_ai_machine-learning-100748222-large.jpg",
    },
    {
      icon: <FaRobot className="text-blue-400 text-5xl mb-3" />,
      title: "Generative AI Development",
      desc: "Innovative tools using LLMs, content generation & chatbots.",
      longDesc:
        "We build GenAI solutions using models like GPT, Gemini, and Claude for content generation, smart chatbots, document analysis, and automation tools.",
      image: "https://cdn.botpenguin.com/assets/website/Generative_AI_Development_8243bd5e62.jpg",
    },
    {
      icon: <FaVrCardboard className="text-green-400 text-5xl mb-3" />,
      title: "AR/VR Development",
      desc: "Immersive AR & VR apps for education, training, and gaming.",
      longDesc:
        "Using Unity, WebXR, and 3D design, we build immersive AR/VR apps with real-world interactivity for learning, simulations, product demos, and more.",
      image: "https://bluewhaleapps.com/wp-content/uploads/2019/05/AR-VR-Tools-Banner.jpg",
    },
    {
      icon: <FaCubes className="text-yellow-400 text-5xl mb-3" />,
      title: "3D Modeling & Visualization",
      desc: "Realistic 3D designs for products, buildings & interactive scenes.",
      longDesc:
        "Using Blender, Maya, and WebGL, we create detailed 3D models and visual experiences for presentations, product showcases, and architectural planning.",
      image: "https://eonreality.com/wp-content/uploads/2020/03/AdobeStock_159799700-scaled.jpeg",
    },
    {
      icon: <FaGlobe className="text-purple-300 text-5xl mb-3" />,
      title: "Web Design & Optimization",
      desc: "Modern, fast-loading, SEO-ready websites with great UI/UX.",
      longDesc:
        "We craft pixel-perfect websites with Tailwind, Figma designs, and performance tools to ensure great speed, mobile responsiveness, and discoverability.",
      image: "https://freelancer-coder.com/wp-content/uploads/2023/04/website-optimization-services.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 px-[6vw] bg-gradient-to-r from-[#0d0d0d] via-[#1a1a2e] to-[#111827] text-white"
    >
      <h2 className="text-4xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        MY SERVICES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white/5 hover:bg-white/10 cursor-pointer border border-purple-500/20 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedService(service)}
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-purple-300 mt-2">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm mt-2">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <Dialog
          open={true}
          onClose={() => setSelectedService(null)}
          className="fixed z-50 inset-0 flex items-center justify-center p-4 bg-black/70"
        >
          <Dialog.Panel className="max-w-2xl w-full rounded-xl bg-[#111827] text-white overflow-hidden shadow-xl">
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <Dialog.Title className="text-2xl font-bold text-purple-300">
                {selectedService.title}
              </Dialog.Title>
              <p className="text-gray-300 mt-3">{selectedService.longDesc}</p>
              <button
                onClick={() => setSelectedService(null)}
                className="mt-6 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </section>
  );
}
