import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ModernGithubSection = ({ username }) => {
  return (
    <section className="py-24 bg-mesh">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-4">
            <FaGithub size={48} className="text-primary" /> GitHub Activity
          </h2>
          <p className="text-primary tracking-widest uppercase font-semibold text-sm">
            FOLLOW MY OPEN SOURCE JOURNEY
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-4 rounded-3xl overflow-hidden"
          >
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117`} 
              alt="GitHub Stats"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-4 rounded-3xl overflow-hidden"
          >
            <img 
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117`} 
              alt="Top Languages"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 glass-card p-4 rounded-3xl overflow-hidden"
          >
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0D1117`} 
              alt="GitHub Streak"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernGithubSection;
