import React from "react";
import { motion } from "framer-motion";
import { FaPalette, FaMusic, FaTrophy, FaBullseye } from "react-icons/fa";
import { greeting } from "../../portfolio";

const hobbies = [
  { name: "Dance", icon: <FaMusic size={24} />, color: "text-pink-400" },
  { name: "Painting", icon: <FaPalette size={24} />, color: "text-purple-400" },
  { name: "Sports", icon: <FaTrophy size={24} />, color: "text-orange-400" },
];

const ModernAbout = () => {
  return (
    <section id="about" className="py-24 bg-mesh relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4 relative z-10">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center rounded-2xl">
                <FaBullseye size={120} className="text-primary animate-pulse" />
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary opacity-10 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {greeting.subTitle}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-primary/80">Languages</h3>
              <div className="flex flex-wrap gap-4">
                {["Gujarati (Native)", "Hindi (Fluent)", "English (Proficient)"].map((lang, i) => (
                  <span key={i} className="px-4 py-2 glass rounded-full text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-primary/80">Hobbies & Interests</h3>
              <div className="grid grid-cols-3 gap-6">
                {hobbies.map((hobby, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-3 p-6 glass-card rounded-2xl text-center"
                  >
                    <div className={hobby.color}>{hobby.icon}</div>
                    <span className="text-sm font-bold">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
