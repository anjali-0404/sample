import React from "react";
import { motion } from "framer-motion";
import { bigProjects } from "../../portfolio";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ModernProjects = () => {
  return (
    <section id="projects" className="py-24 bg-mesh">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{bigProjects.title}</h2>
          <p className="text-primary tracking-widest uppercase font-semibold text-sm">
            {bigProjects.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {bigProjects.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass-card rounded-3xl overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.projectName}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.projectDesc}
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {project.footerLink.map((link, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                        link.name === "GitHub" 
                          ? "bg-gray-800 text-white hover:bg-gray-700" 
                          : "bg-primary text-dark hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                      }`}
                    >
                      {link.name === "GitHub" ? <FaGithub size={18} /> : <FaExternalLinkAlt size={18} />}
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernProjects;
