import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi"; 

const LeftSidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full font-['Inconsolata']">
      <div className="w-3/4 md:w-3/5 h-3/5 flex flex-col justify-center text-center">
        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 mt-6 md:mt-0">Ravi Kumar</h1>
        <h4 className="text-xl md:text-2xl font-medium mb-4">
          Engineer | Developer | Photographer
        </h4>

        {/* Social Links */}
        <div className="flex justify-center mb-6">
          <a
            href="https://github.com/theravi04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-4 hover:text-[#0093e9]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ravikumar04/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-4 hover:text-[#0093e9]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/capturingthestardust/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-4 hover:text-[#0093e9]"
          >
            <FaInstagram />
          </a>
          <a
            href="http://t.me/theravi_04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-4 hover:text-[#0093e9]"
          >
            <FiSend />
          </a>
          <a
            href="mailto:04ravi.rk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-4 hover:text-[#0093e9]"
          >
            <FiMail />
          </a>
          <a
            href="https://x.com/theravikumar04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-4 hover:text-[#0093e9]"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
