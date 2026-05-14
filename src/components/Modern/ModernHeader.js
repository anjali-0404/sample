import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiCode } from "react-icons/hi";

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const ModernHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-dark/80 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-2xl font-bold italic"
        >
          <HiCode className="text-primary" size={28} />
          <span className="text-gradient">DG</span>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a 
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="#contact"
              className="px-6 py-2.5 bg-primary text-dark font-bold rounded-full text-sm glow-shadow"
            >
              Hire Me
            </a>
          </motion.li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-lighter border-b border-white/5 overflow-hidden"
          >
            <ul className="container mx-auto px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-lg font-medium block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact"
                  className="w-full py-4 bg-primary text-dark font-bold rounded-xl flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ModernHeader;
