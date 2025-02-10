import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
    
  { name: "HTML", percentage: 95 },
  { name: "CSS", percentage: 90 },
  { name: "C", percentage: 95 },
  { name: "JAVA", percentage: 95 },
  { name: "MYSQL", percentage: 85 },
  { name: "SPRING-BOOT", percentage: 70 },
  { name: "JAVASCRIPT", percentage: 95 },
  { name: "REACT", percentage: 95 },
];

export default function SkillSection() {
  return (
    <div className="bg-primary-content text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-center glowing-text mb-6">
          SKILLS
        </h1>
        <h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            <h2>
              Here are some of the skills I’ve gained along my journey as a
              developer.
            </h2>
          </p>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillCard({ skill, delay }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedPercentage((prev) => {
        if (prev < skill.percentage) return prev + 1;
        clearInterval(interval);
        return skill.percentage;
      });
    }, 15); // Adjust speed as needed
    return () => clearInterval(interval);
  }, [skill.percentage]);

  return (
    <motion.div
      className="card bg-gray-800 shadow-xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative flex items-center justify-center w-32 h-32 mx-auto mb-6">
        <div
          className="radial-progress text-[#6abdf5]"
          style={{
            "--value": animatedPercentage,
            "--size": "8rem",
            "--thickness": "0.5rem",
          }}
        >
          {animatedPercentage}%
        </div>
      </div>
      <h3 className="text-xl font-bold text-center">{skill.name}</h3>
      <p className="text-gray-400 text-center mt-2">
        Proficiency level: {skill.percentage}%
      </p>
    </motion.div>
  );
}
