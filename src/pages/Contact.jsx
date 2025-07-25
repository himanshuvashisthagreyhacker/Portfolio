import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDiscord,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [selectedContact, setSelectedContact] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you.");
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      name: "Email",
      icon: <FaEnvelope size={26} />,
      link: "mailto:youremail@example.com",
      value: "youremail@example.com",
    },
    {
      name: "Phone",
      icon: <FaPhone size={26} />,
      link: "tel:+1234567890",
      value: "+1 234 567 890",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={26} />,
      link: "https://github.com/yourusername",
      value: "github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={26} />,
      link: "https://linkedin.com/in/yourusername",
      value: "linkedin.com/in/yourusername",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={26} />,
      link: "https://wa.me/your_number",
      value: "Chat on WhatsApp",
    },
    {
      name: "Discord",
      icon: <FaDiscord size={26} />,
      link: "https://discord.com/users/yourdiscord",
      value: "discord.com/yourdiscord",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 px-[6vw] font-[Poppins] bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0e0e0e] text-white min-h-screen"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-lg tracking-wide">
        CONTACT ME
      </h2>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-teal-500/30">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-600 focus:border-teal-400 outline-none py-2 peer text-white"
              placeholder=" "
            />
            <label className="absolute left-0 -top-3 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all">
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-600 focus:border-teal-400 outline-none py-2 peer text-white"
              placeholder=" "
            />
            <label className="absolute left-0 -top-3 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all">
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-transparent border-b border-gray-600 focus:border-teal-400 outline-none py-2 peer text-white resize-none"
              placeholder=" "
            />
            <label className="absolute left-0 -top-3 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all">
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 transition-all duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>

        {/* Social Contact Cards */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {contacts.map((contact, i) => (
            <div
              key={i}
              onClick={() => setSelectedContact(contact)}
              className="bg-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-teal-400/40 hover:border-teal-400 hover:shadow-[0_0_20px_rgba(45,212,191,0.6)] transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 mb-2 flex items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 shadow-md">
                {contact.icon}
              </div>
              <span className="text-sm text-gray-200">{contact.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal for Contact Details */}
      {selectedContact && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedContact(null)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-[#0e0e0e] rounded-2xl p-6 max-w-sm w-full border border-teal-400 shadow-2xl text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedContact(null)}
              className="absolute top-3 right-4 text-gray-300 hover:text-blue-400 text-2xl"
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 shadow-md">
                {selectedContact.icon}
              </div>
              <h3 className="text-xl font-bold text-teal-400">{selectedContact.name}</h3>
              <p className="text-sm text-gray-300 mt-2">{selectedContact.value}</p>
              <a
                href={selectedContact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gradient-to-r from-teal-400 to-blue-500 px-4 py-2 rounded-full text-sm font-semibold hover:from-blue-500 hover:to-teal-400 transition-all duration-300"
              >
                Open {selectedContact.name}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
