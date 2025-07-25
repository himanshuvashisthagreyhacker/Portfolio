import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../assets/logo.png"; // adjust path based on file structure

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white py-12 px-4 font-sans shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-blue-900 pb-10">
        {/* Programs */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Programs</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white transition duration-300">Corporate</li>
            <li className="hover:text-white transition duration-300">One to One</li>
            <li className="hover:text-white transition duration-300">Consulting</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white transition duration-300">Web Development</li>
            <li className="hover:text-white transition duration-300">Fullstack Development</li>
            <li className="hover:text-white transition duration-300">Blockchain Development</li>
            <li className="hover:text-white transition duration-300">AI/ML Development</li>
            <li className="hover:text-white transition duration-300">And many more...</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-white transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-white transition duration-300">About</a></li>
            <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Newsletter</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full sm:w-auto px-4 py-2 mb-2 sm:mb-0 sm:mr-2 rounded-md border border-cyan-500 text-black focus:outline-none"
            />
            <button className="bg-cyan-600 px-4 py-2 rounded-md hover:bg-cyan-700 transition">
              Subscribe
            </button>
          </div>

          <div className="flex mt-4 gap-4 text-2xl">
            <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition duration-300"><FaGithub /></a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition duration-300"><FaLinkedin /></a>
            <a href="mailto:your-email@gmail.com" className="hover:text-red-400 transition duration-300"><FaEnvelope /></a>
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition duration-300"><FaTwitter /></a>
          </div>

          <p className="text-sm mt-3 text-gray-300">
            Mobile: +91-xxxxxxxxxx<br />
            Email: your-email@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 px-4 text-sm text-gray-300">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full border border-cyan-400 shadow-md"
          />
          <span className="text-lg font-semibold text-white">
            Himanshu Vashistha
          </span>
        </div>
        <p className="text-center">© {new Date().getFullYear()} himanshu.dev | All Rights Reserved</p>
        <a
          href="#top"
          className="text-cyan-400 hover:text-white text-xl transition duration-300"
        >
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}
