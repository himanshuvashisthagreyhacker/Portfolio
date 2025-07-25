import React, { useState, useRef } from "react";

// ✅ Logos (Replace missing logos in /assets)
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/reactjs.png";
import reduxLogo from "../assets/redux.png";
import tailwindLogo from "../assets/tailwindcss.png";
import bootstrapLogo from "../assets/bootstrap.png";

import nodeLogo from "../assets/nodejs.png";
import expressLogo from "../assets/express.png";
import flaskLogo from "../assets/flask.jpg";
import mongoLogo from "../assets/mongodb.png";
import mysqlLogo from "../assets/mysql.png";
import postgresqlLogo from "../assets/postgre.png";

import pythonLogo from "../assets/python.jpg";
import pandasLogo from "../assets/pandas.webp";
import numpyLogo from "../assets/numpy.png";
import sklearnLogo from "../assets/sklearn.jpg";
import tensorflowLogo from "../assets/tensorflow.jpg";
import kerasLogo from "../assets/keras.webp";
import opencvLogo from "../assets/opencv.webp";
import yoloLogo from "../assets/yolo.webp";

import solidityLogo from "../assets/solidity.png";
import ethereumLogo from "../assets/ethereum.jpg";
import web3Logo from "../assets/web3.jpg";
import metamaskLogo from "../assets/metamask.png";
import hardhatLogo from "../assets/hardhat.png";

import dockerLogo from "../assets/docker.png";
import kubernetesLogo from "../assets/kubernetes.webp";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import linuxLogo from "../assets/linux.webp";
import jenkinsLogo from "../assets/jenkins.jpg";
import kafkaLogo from "../assets/kafka.webp";

import vscodeLogo from "../assets/vscode.png";
import postmanLogo from "../assets/postman.webp";
import figmaLogo from "../assets/figma.png";

import nextjsLogo from "../assets/nextjs.png";
import materialuiLogo from "../assets/materialui.png";
import chartjsLogo from "../assets/chartjs.png";

import pineconeLogo from "../assets/pinecone.jpeg";
import milvusLogo from "../assets/milvus.webp";
import chromadbLogo from "../assets/chromadb.png";
import redisLogo from "../assets/redis.jpg";

import chatgptLogo from "../assets/chatgpt.jpg";
import bardLogo from "../assets/bard.webp";
import claudeLogo from "../assets/claude.png";
import midjourneyLogo from "../assets/midjourney.webp";
import dalleLogo from "../assets/dalle.webp";
import langchainLogo from "../assets/langchain.webp";
import autogptLogo from "../assets/autogpt.jpg";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const scrollRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-teal-400 to-blue-500",
      skills: [
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "JavaScript", logo: jsLogo },
        { name: "React.js", logo: reactLogo },
        { name: "Redux", logo: reduxLogo },
        { name: "Tailwind CSS", logo: tailwindLogo },
        { name: "Bootstrap", logo: bootstrapLogo },
        { name: "Next.js", logo: nextjsLogo },
        { name: "Material UI", logo: materialuiLogo },
      ],
    },
    {
      title: "Backend",
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "Node.js", logo: nodeLogo },
        { name: "Express.js", logo: expressLogo },
        { name: "Flask", logo: flaskLogo },
        { name: "MongoDB", logo: mongoLogo },
        { name: "MySQL", logo: mysqlLogo },
        { name: "PostgreSQL", logo: postgresqlLogo },
      ],
    },
    {
      title: "AI / ML",
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "Python", logo: pythonLogo },
        { name: "Pandas", logo: pandasLogo },
        { name: "NumPy", logo: numpyLogo },
        { name: "Scikit-Learn", logo: sklearnLogo },
        { name: "TensorFlow", logo: tensorflowLogo },
        { name: "Keras", logo: kerasLogo },
        { name: "OpenCV", logo: opencvLogo },
        { name: "YOLO", logo: yoloLogo },
        { name: "Chart.js", logo: chartjsLogo },
      ],
    },
    {
      title: "Blockchain",
      color: "from-purple-500 to-indigo-600",
      skills: [
        { name: "Solidity", logo: solidityLogo },
        { name: "Ethereum", logo: ethereumLogo },
        { name: "Web3.js", logo: web3Logo },
        { name: "MetaMask", logo: metamaskLogo },
        { name: "Hardhat", logo: hardhatLogo },
      ],
    },
    {
      title: "Vector Databases",
      color: "from-pink-500 to-fuchsia-600",
      skills: [
        { name: "Milvus", logo: milvusLogo },
        { name: "Redis", logo: redisLogo },
        { name: "ChromaDB", logo: chromadbLogo },
        { name: "Pinecone", logo: pineconeLogo },
      ],
    },
    {
      title: "GenAI Tools",
      color: "from-cyan-400 to-blue-600",
      skills: [
        { name: "ChatGPT", logo: chatgptLogo },
        { name: "Bard", logo: bardLogo },
        { name: "Claude", logo: claudeLogo },
        { name: "Midjourney", logo: midjourneyLogo },
        { name: "DALL·E", logo: dalleLogo },
        { name: "LangChain", logo: langchainLogo },
        { name: "AutoGPT", logo: autogptLogo },
      ],
    },
    {
      title: "DevOps",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "Docker", logo: dockerLogo },
        { name: "Kubernetes", logo: kubernetesLogo },
        { name: "Git", logo: gitLogo },
        { name: "GitHub", logo: githubLogo },
        { name: "Linux", logo: linuxLogo },
        { name: "Jenkins", logo: jenkinsLogo },
        { name: "Apache Kafka", logo: kafkaLogo },
      ],
    },
    {
      title: "Tools",
      color: "from-pink-400 to-rose-500",
      skills: [
        { name: "VS Code", logo: vscodeLogo },
        { name: "Postman", logo: postmanLogo },
        { name: "Figma", logo: figmaLogo },
      ],
    },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section
      id="skills"
      className="py-16 px-[6vw] font-[Poppins] text-white bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0e0e0e] min-h-[100vh]"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-lg tracking-wide">
        SKILLS
      </h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden scroll-smooth pb-4"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 w-72 bg-gradient-to-br ${category.color} p-1 rounded-2xl shadow-xl hover:shadow-[0_0_25px_rgba(45,212,191,0.6)] transition-all duration-300 hover:scale-[1.05] cursor-pointer`}
            >
              <div className="bg-[#1f1f1f] rounded-2xl p-8 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-4 text-teal-400">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {category.skills.slice(0, 6).map((skill, i) => (
                    <div
                      key={i}
                      className="bg-white/10 rounded-xl p-3 flex flex-col items-center justify-center hover:bg-teal-500/20 transition-all duration-300"
                    >
                      <div className="w-12 h-12 mb-2 rounded-lg overflow-hidden border border-teal-400 bg-white">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[11px] text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-400 italic">
                  Click for more details
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-lg"
        >
          ⬅
        </button>

        {/* ✅ Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-full shadow-lg"
        >
          ➡
        </button>
      </div>

      {selectedCategory && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedCategory(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0e0e0e] rounded-2xl p-6 max-w-md w-full border border-teal-400 shadow-2xl text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-3 right-4 text-gray-300 hover:text-blue-400 text-2xl"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">
              {selectedCategory.title}
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {selectedCategory.skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-xl p-3 flex flex-col items-center hover:bg-teal-500/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-1 rounded-lg overflow-hidden border border-teal-400 bg-white">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
