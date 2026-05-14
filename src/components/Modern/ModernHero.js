import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import { greeting, socialMediaLinks } from "../../portfolio";

const ModernHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh py-20">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm md:text-base">
            Welcome to my portfolio
          </h2>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight">
            I'm <span className="text-gradient">{greeting.username}</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="h-8 mb-6">
              <motion.p
                animate={{ 
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  times: [0, 0.1, 0.9, 1]
                }}
                className="text-xl md:text-2xl font-mono text-primary/80"
              >
                Computer Engineering Student | Flutter Developer
              </motion.p>
            </div>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
              {greeting.subTitle}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-primary text-dark font-bold rounded-full transition-all glow-shadow flex items-center gap-2"
            >
              <FaEnvelope size={20} />
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-700 hover:border-primary transition-all rounded-full flex items-center gap-2"
            >
              <FaFileAlt size={20} />
              View Resume
            </motion.a>
          </div>

          <div className="flex justify-center gap-8 text-gray-500">
            <motion.a
              whileHover={{ y: -5, color: "#fff" }}
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: "#fff" }}
              href={socialMediaLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: "#fff" }}
              href={`mailto:${socialMediaLinks.gmail}`}
            >
              <FaEnvelope size={28} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <HiChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default ModernHero;
