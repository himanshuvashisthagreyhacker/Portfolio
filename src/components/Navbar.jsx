import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  const socialIcons = [
    { icon: <FaGithub />, href: "https://github.com/coderstar1234" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/himanshu-vashistha-b48a762a7/" },
    { icon: <FaWhatsapp />, href: "#" },
    { icon: <FaDiscord />, href: "#" },
  ];

  // ✅ Always set dark mode on load
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 shadow-sm border-b border-gray-700 
                 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                 backdrop-blur-md bg-opacity-90"
    >
      <nav className="flex items-center justify-between px-6 py-3">
        {/* ✅ Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto object-contain border border-blue-700 rounded-md shadow dark:brightness-90"
          />
        </div>

        {/* ✅ Desktop Slogan */}
        <div className="hidden lg:flex flex-1 justify-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-400">
            <span className="text-white">I specialize in </span>
            <Typewriter
              words={[
                "Crafting Responsive UIs",
                "Building Scalable Full-Stack Apps",
                "Creating AI-Driven Solutions",
                "Engineering GenAI Experiences",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
        </div>

        {/* ✅ Desktop Navigation */}
        <div className="hidden lg:flex lg:ml-auto lg:mr-4">
          <ul className="flex gap-6 text-lg lg:text-xl font-semibold">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="hover:text-purple-400 text-gray-200 transition duration-200"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Social Icons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 text-xl">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 text-gray-200 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* ✅ Mobile Toggle Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            className="text-3xl focus:outline-none text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 px-6 py-4 border-t border-gray-700">
          <ul className="flex flex-col gap-4 text-lg font-semibold">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className="w-full text-left hover:text-purple-400 text-gray-200 transition"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4 text-xl">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 text-gray-200 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
