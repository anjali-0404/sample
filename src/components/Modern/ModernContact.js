import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { contactInfo, socialMediaLinks } from "../../portfolio";

const ModernContact = () => {
  return (
    <section id="contact" className="py-24 bg-mesh relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -mr-48 -mb-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{contactInfo.title}</h2>
          <p className="text-primary tracking-widest uppercase font-semibold text-sm">
            GET IN TOUCH
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-10 rounded-3xl h-full">
              <h3 className="text-3xl font-bold mb-6">Let's build something <span className="text-primary">extraordinary</span> together.</h3>
              <p className="text-gray-400 text-lg mb-10">
                {contactInfo.subtitle}
              </p>

              <div className="space-y-6">
                <a href={`mailto:${contactInfo.email_address}`} className="flex items-center gap-4 group">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-dark transition-all">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email</p>
                    <p className="text-xl font-medium">{contactInfo.email_address}</p>
                  </div>
                </a>

                <a href={`tel:${contactInfo.number}`} className="flex items-center gap-4 group">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-dark transition-all">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Phone</p>
                    <p className="text-xl font-medium">{contactInfo.number}</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-800 flex gap-6">
                <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-primary transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:text-primary transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass-card p-10 rounded-3xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea 
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-dark font-bold rounded-2xl flex items-center justify-center gap-2 glow-shadow transition-all"
              >
                <FaPaperPlane size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;
