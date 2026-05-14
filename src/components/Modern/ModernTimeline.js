import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const ModernTimeline = ({ title, subtitle, items, type = "experience" }) => {
  const Icon = type === "experience" ? FaBriefcase : FaGraduationCap;

  return (
    <section className="py-24 bg-mesh relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{title}</h2>
          <p className="text-primary tracking-widest uppercase font-semibold text-sm">
            {subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2"></div>

          {items.map((item, index) => (
            <div key={index} className={`relative mb-12 md:mb-20 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(0,212,255,0.8)]"></div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`w-full md:w-[45%] glass-card p-8 rounded-3xl relative ml-8 md:ml-0`}
              >
                <div className="flex items-center gap-3 text-primary mb-4">
                  <Icon size={20} />
                  <span className="text-sm font-bold tracking-wider uppercase">
                    {type === "experience" ? item.role : item.subHeader}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-white">
                  {type === "experience" ? item.company : item.schoolName}
                </h3>

                <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt size={14} />
                    {item.date || item.duration}
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt size={14} />
                      {item.location}
                    </div>
                  )}
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>

                {item.descBullets && item.descBullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {item.descBullets.map((bullet, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernTimeline;
