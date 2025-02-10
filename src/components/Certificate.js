import React from "react";
import { motion } from "framer-motion";

export default function Certificates() {
  const certificates = [
    {
      name: "SQL",
      institute: "IT Vedant",
      img: "/certificate/sql-certificate.jpg",
    },
    {
      name: "JAVA",
      institute: "IT Vedant",
      img: "/certificate/java-certicate.jpg",
    },
    {
      name: "FULL STACK",
      institute: "IT Vedant",
      img: "/certificate/fsd-certifcate.jpg",
    },
    {
      name: "WEB DESIGN",
      institute: "IT Vedant",
      img: "/certificate/adv-web-design.jpg",
    },
  ];

  return (
    <div className="py-16 bg-primary-content text-center">
      {/* <h1 className="text-4xl font-bold glow-text mb-12">CERTIFICATES</h1> */}
      <h1 className="text-5xl md:text-7xl font-bold text-center glowing-text mb-6">
          CERTIFICATES
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[90%] mx-auto">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

function CertificateCard({ certificate }) {
  return (
    <motion.div
      className="relative p-4 bg-base-100 shadow-xl text-center border-2 border-transparent rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Glowing border */}
      <div className="absolute inset-0 border-2 border-[#6abdf5] rounded-lg animate-border-glow pointer-events-none"></div>
      <figure className="relative z-10 h-96">
        <img
          src={certificate.img}
          alt={certificate.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </figure>
      <div className="relative z-10 text-center py-4">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6abdf5] to-[#f56abb]">
          {certificate.name}
        </h2>
        <p className="text-gray-400">{certificate.institute}</p>
      </div>
    </motion.div>
  );
}
