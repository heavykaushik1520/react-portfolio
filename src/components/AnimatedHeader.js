import React from "react";
import { motion } from "framer-motion";

export default function AnimatedHeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="header finisher-header"
      style={{ width: "100%", height: "300px", backgroundColor: "#0c0216" }}
    >
      <motion.h1
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ color: "white", textAlign: "center", paddingTop: "100px" }}
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="button-container"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4A90E2",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
