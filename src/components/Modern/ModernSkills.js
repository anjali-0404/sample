import React from "react";
import { motion } from "framer-motion";
import { skillsSection } from "../../portfolio";
import { FaPython, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { HiCode } from "react-icons/hi";

const iconMap = {
  python: <FaPython className="text-blue-400" />,
  php: <FaPhp className="text-indigo-400" />,
  "html-5": <FaHtml5 className="text-orange-500" />,
  css3: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  mysql: <FaDatabase className="text-blue-600" />,
  flutter: <SiFlutter className="text-blue-400" />,
  github: <FaGithub className="text-white" />,
};

const ModernSkills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-mesh">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{skillsSection.title}</h2>
          <p className="text-primary tracking-widest uppercase font-semibold text-sm">
            {skillsSection.subTitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {skillsSection.skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4 glass-card p-6 rounded-2xl">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <HiCode size={24} />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{skill}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {skillsSection.softwareSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center justify-center w-28 h-28 glass rounded-2xl p-4 transition-all"
              >
                <div className="text-4xl mb-2">
                  {iconMap[skill.skillName] || <HiCode className="text-gray-400" />}
                </div>
                <span className="text-xs font-medium text-gray-400 uppercase tracking-tighter">
                  {skill.skillName}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold uppercase tracking-widest text-primary/80">Soft Skills</h3>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {["Teamwork", "Creativity", "Time Management"].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 glass-card rounded-2xl border border-primary/20 flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="font-semibold">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSkills;
