import React, { useState } from "react";
import {
  FaLaptopCode,
  FaBrain,
  FaCloud,
  FaRobot,
  FaUserGraduate,
  FaRocket,
} from "react-icons/fa";
import profileImage from "../assets/h1.jpg";
import devImage from "../assets/dev2.webp";

const highlightData = [
  {
    icon: <FaLaptopCode className="text-purple-400 text-2xl" />,
    title: "Full Stack Development",
    desc: "React, Node.js, MongoDB, Express",
    image: devImage,
    content:
      "As a Full Stack Developer, I build robust web applications using the MERN stack. I focus on performance, responsiveness, and scalability while integrating real-world features such as authentication, REST APIs, and database management.",
  },
  {
    icon: <FaBrain className="text-pink-400 text-2xl" />,
    title: "AI & Machine Learning",
    desc: "Python, TensorFlow, GenAI",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.eUUpZVsMF8yAHi6uW44f5gHaD-?rs=1&pid=ImgDetMain&o=7&rm=3",
    content:
      "I apply machine learning models to solve real-world challenges like image recognition, prediction systems, and language models using frameworks like TensorFlow, PyTorch, and OpenAI APIs.",
  },
  {
    icon: <FaCloud className="text-blue-400 text-2xl" />,
    title: "Cloud & DevOps",
    desc: "AWS, Firebase, CI/CD pipelines",
    image:
      "https://cipe.org.in/wp-content/uploads/2020/12/DevOps-02.jpg",
    content:
      "Deploying scalable cloud applications using AWS, Firebase, and Docker. I automate workflows using CI/CD pipelines and ensure uptime, reliability, and security in cloud-native applications.",
  },
  {
    icon: <FaRobot className="text-green-400 text-2xl" />,
    title: "Quantum & GenAI",
    desc: "Exploring next-gen intelligent systems",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/0*D-XaRcSyr3t1DBkO.jpeg",
    content:
      "I explore cutting-edge topics like Quantum Machine Learning and Generative AI, experimenting with tools like Qiskit and GPT models to stay ahead in the world of advanced AI.",
  },
  {
    icon: <FaUserGraduate className="text-yellow-400 text-2xl" />,
    title: "Academic Excellence",
    desc: "Pursuing B.Tech with top grades in CS",
    image:
      "https://www.sharda.ac.in/blog/attachments/blog_images/BTech-in-Computer-Science2-min.jpg",
    content:
      "Currently pursuing B.Tech in Computer Science with a strong GPA. Consistently ranked among the top students while contributing to coding clubs, hackathons, and research forums.",
  },
  {
    icon: <FaRocket className="text-red-400 text-2xl" />,
    title: "Tech Visionary",
    desc: "Solving real-world problems with code",
    image:
      "https://showcase.tech4bizsolutions.com/wp-content/uploads/2024/11/6.jpg",
    content:
      "My goal is to use technology to solve meaningful problems — from health and education to automation and environment — while continuously innovating and adapting to global trends.",
  },
];

export default function About() {
  const [activeBox, setActiveBox] = useState(null);

  return (
    <>
      <section
        id="about"
        className="py-20 px-[6vw] bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0f0c29] text-white"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ✅ Profile Image */}
          <div className="relative group">
            <img
              src={profileImage}
              alt="Himanshu Vashistha"
              className="rounded-3xl border-4 border-purple-600 shadow-2xl w-full max-w-sm mx-auto transform group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* ✅ Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 mb-6">
              About Me
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I'm <span className="text-purple-400 font-semibold">Himanshu Vashistha</span>, a passionate{" "}
              <span className="text-pink-400 font-semibold">Full Stack Developer</span> and{" "}
              <span className="text-purple-400 font-semibold">AI/ML Enthusiast</span>. I build scalable, intelligent
              apps that solve real problems with tech.
            </p>

            <p className="text-gray-400 text-md leading-relaxed mb-6">
              Skilled in React, Node.js, MongoDB, Python, and emerging fields like Quantum Computing and Cloud DevOps.
              Continuously learning and pushing boundaries of what code can do.
            </p>

            {/* ✅ Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlightData.map((item, index) => (
                <HighlightBox
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  onClick={() => setActiveBox(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Modal Popup */}
      {activeBox !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-6"
          onClick={() => setActiveBox(null)}
        >
          <div
            className="bg-[#1a1a2e] max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-700 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={highlightData[activeBox].image}
              alt={highlightData[activeBox].title}
              className="w-full md:w-1/2 object-cover"
            />
            <div className="p-6 md:p-8 flex-1">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text mb-4">
                {highlightData[activeBox].title}
              </h3>
              <p className="text-gray-300 text-md md:text-lg leading-relaxed">
                {highlightData[activeBox].content}
              </p>
              <button
                onClick={() => setActiveBox(null)}
                className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ✅ Highlight Card Component
const HighlightBox = ({ icon, title, desc, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer flex items-start gap-3 bg-white/10 border border-purple-500/20 backdrop-blur-sm rounded-xl p-4 hover:scale-105 transition-transform duration-300 shadow-md"
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  </div>
);
