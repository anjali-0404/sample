import React from "react";
import { motion } from "framer-motion";
import { greeting } from "../../portfolio";
import { HiCode } from "react-icons/hi";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-dark flex flex-col items-center justify-center z-[100]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
        <div className="relative p-8 bg-dark-lighter rounded-full border border-primary/20 glow-shadow">
          <HiCode size={80} className="text-primary" />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          <span className="text-gray-500 font-light">&lt;</span>
          <span className="text-gradient px-2">{greeting.username}</span>
          <span className="text-gray-500 font-light">/&gt;</span>
        </h1>
        <div className="mt-4 w-48 h-1 bg-gray-800 mx-auto rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-primary"
          />
        </div>
      </motion.div>
    </div>
  );
}
