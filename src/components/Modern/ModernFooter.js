import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { socialMediaLinks, greeting } from "../../portfolio";

const ModernFooter = () => {
  return (
    <footer className="py-12 bg-mesh border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gradient mb-2">{greeting.username}</h2>
            <p className="text-gray-500 text-sm max-w-xs">
              Building impactful digital solutions with clean UI/UX and scalable architecture.
            </p>
          </div>

          <div className="flex gap-6">
            <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <FaGithub size={24} />
            </a>
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href={`mailto:${socialMediaLinks.gmail}`} className="text-gray-500 hover:text-primary transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Drashti Gajera. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Developed by <span className="text-primary font-medium">{greeting.username}</span>
            <FaHeart size={14} className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
