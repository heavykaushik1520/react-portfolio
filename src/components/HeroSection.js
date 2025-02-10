// import React from "react";
// import { motion } from "framer-motion";
// import {Link} from "react-router-dom";

// export default function HeroSection() {
//   // Animation Variants for Text
//   const textVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { type: "spring", stiffness: 50, delay: 0.3 },
//     },
//   };

//   // Animation Variants for Image
//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { type: "spring", stiffness: 100, delay: 0.5 },
//     },
//   };

//   return (
//     <div className="h-screen flex flex-col-reverse md:flex-row items-center bg-gradient-to-r from-[#6abdf5] to-[#f56abb]">
//       {/* Left Side - Message */}
//       <motion.div
//         variants={textVariants}
//         initial="hidden"
//         animate="visible"
//         className="w-full md:w-1/2 text-center md:text-left p-6 md:pl-20"
//       >
//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//           WELCOME TO MY PORTFOLIO
//         </h1>
//         <p className="text-lg text-gray-100 text-center max-w-xl mx-auto md:mx-0">
//           Hello World! I'm Kaushik Mandavkar, a Web Developer based in India. I
//           started my coding journey almost exactly a year ago and am now looking
//           for freelance projects or opportunities at great companies. Below, I
//           share my skills, experience, and education.
//         </p>
//       </motion.div>

//       {/* Right Side - Profile Picture with Glowing Border */}
//       <motion.div
//         variants={imageVariants}
//         initial="hidden"
//         animate="visible"
//         className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10"
//       >
//         <div className="relative">
//           <img
//             src="my-image.png"
//             alt="Profile"
//             className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-transparent"
//           />
//           <div className="absolute inset-0 rounded-full border-[4px] border-[#6abdf5] animate-pulse"></div>
//         </div>
//       </motion.div>

//       {/* Sticky Buttons for Large Screens */}
//       {/* <div className="hidden md:flex flex-col fixed top-1/4 right-4 space-y-4">
//         <button className="btn btn-accent">
//             <Link to="/skills">
//             SKILLS
//             </Link>
//         </button>
//         <button className="btn btn-accent">Accent</button>
//         <button className="btn btn-accent">Accent</button>
//         <button className="btn btn-accent">Accent</button>
//       </div> */}

//       <div className="hidden md:block fixed bottom-6 right-6 z-50">
//         <a
//           href="https://wa.me/919175866586"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:opacity-90 transition-all"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="white"
//             className="w-8 h-8"
//           >
//             <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.55 4.16 1.593 5.984L.013 24l6.122-1.563A11.99 11.99 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.357 17.17c-.266.747-1.53 1.38-2.106 1.47-.562.088-1.288.124-2.066-.131-.854-.27-2.008-.662-3.454-1.742-2.54-1.785-4.21-4.698-4.34-4.908-.128-.211-1.04-1.392-1.04-2.657s.659-1.878.888-2.13c.222-.244.596-.305.795-.305s.397.005.572.01c.184.005.433-.07.672.516.266.641.911 2.223.993 2.382.081.159.136.352.025.563-.111.212-.167.339-.33.522-.164.182-.346.397-.495.535-.163.153-.334.318-.146.626.188.308.834 1.382 1.785 2.242 1.23 1.104 2.268 1.456 2.578 1.618.31.161.493.134.674-.083.181-.217.775-.888.983-1.196.206-.308.413-.267.688-.161.275.106 1.74.821 2.041.973.3.152.497.224.572.35.072.123.072.722-.194 1.47z" />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, delay: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, delay: 0.5 },
    },
  };

  return (
    <div className="h-screen flex flex-col-reverse md:flex-row items-center bg-gradient-to-r from-[#6abdf5] to-[#f56abb]">
      {/* Left Side - Message */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 text-center md:text-left p-6 md:pl-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          WELCOME TO MY PORTFOLIO
        </h1>
        <p className="text-lg text-gray-100 text-center max-w-xl mx-auto md:mx-0">
          Hello World! I'm Kaushik Mandavkar, a Web Developer based in India. I
          started my coding journey almost exactly a year ago and am now looking
          for freelance projects or opportunities at great companies. Below, I
          share my skills, experience, and education.
        </p>
        <div className="mt-6">
          <a
            href="/cv/kaushikcv.pdf" // Ensure your resume is placed in the public folder
            download="Kaushik_Mandavkar_Resume.pdf"
            className="inline-block bg-[#f56abb] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#e04a9d] transition-all"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      {/* Right Side - Profile Picture */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10"
      >
        <div className="relative">
          <img
            src="my-image.png"
            alt="Profile"
            className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-transparent"
          />
          <div className="absolute inset-0 rounded-full border-[4px] border-[#6abdf5] animate-pulse"></div>
        </div>
      </motion.div>

      {/* WhatsApp Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919175866586"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:opacity-90 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.55 4.16 1.593 5.984L.013 24l6.122-1.563A11.99 11.99 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.357 17.17c-.266.747-1.53 1.38-2.106 1.47-.562.088-1.288.124-2.066-.131-.854-.27-2.008-.662-3.454-1.742-2.54-1.785-4.21-4.698-4.34-4.908-.128-.211-1.04-1.392-1.04-2.657s.659-1.878.888-2.13c.222-.244.596-.305.795-.305s.397.005.572.01c.184.005.433-.07.672.516.266.641.911 2.223.993 2.382.081.159.136.352.025.563-.111.212-.167.339-.33.522-.164.182-.346.397-.495.535-.163.153-.334.318-.146.626.188.308.834 1.382 1.785 2.242 1.23 1.104 2.268 1.456 2.578 1.618.31.161.493.134.674-.083.181-.217.775-.888.983-1.196.206-.308.413-.267.688-.161.275.106 1.74.821 2.041.973.3.152.497.224.572.35.072.123.072.722-.194 1.47z" />
          </svg>
        </a>
      </div>
    </div>
  );
}



// import React from "react";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const textVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { type: "spring", stiffness: 50, delay: 0.3 },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { type: "spring", stiffness: 100, delay: 0.5 },
//     },
//   };

//   return (
//     <div className="h-screen flex flex-col-reverse md:flex-row items-center bg-gradient-to-r from-[#6abdf5] to-[#f56abb]">
//       {/* Left Side - Message */}
//       <motion.div
//         variants={textVariants}
//         initial="hidden"
//         animate="visible"
//         className="w-full md:w-1/2 text-center md:text-left p-6 md:pl-20"
//       >
//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
//           WELCOME TO MY PORTFOLIO
//         </h1>
//         <p className="text-lg text-gray-100 text-center max-w-xl mx-auto md:mx-0">
//           Hello World! I'm Kaushik Mandavkar, a Web Developer based in India. I
//           started my coding journey almost exactly a year ago and am now looking
//           for freelance projects or opportunities at great companies. Below, I
//           share my skills, experience, and education.
//         </p>
//         <div className="mt-6">
//           <a
//             href="/cv/kaushikcv.pdf"
//             download="Kaushik_Mandavkar_Resume.pdf"
//             className="inline-block bg-[#f56abb] text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#e04a9d] transition-all"
//           >
//             Download CV
//           </a>
//         </div>
//       </motion.div>

//       {/* Right Side - Profile Picture */}
//       <motion.div
//         variants={imageVariants}
//         initial="hidden"
//         animate="visible"
//         className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10 relative"
//       >
//         {/* Spinning Border */}
//         <div className="absolute inset-0 flex justify-center items-center">
//           <motion.div
//             className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-transparent"
//             style={{
//               backgroundImage:
//                 "conic-gradient(from 0deg, #6abdf5, #f56abb, #6abdf5)",
//             }}
//             animate={{
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           ></motion.div>
//         </div>

//         {/* Profile Picture */}
//         <div className="relative">
//           <img
//             src="my-image.png"
//             alt="Profile"
//             className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-transparent"
//           />
//         </div>
//       </motion.div>

//       {/* WhatsApp Button */}
//       <div className="hidden md:block fixed bottom-6 right-6 z-50">
//         <a
//           href="https://wa.me/919175866586"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-all"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="white"
//             className="w-8 h-8"
//           >
//             <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.55 4.16 1.593 5.984L.013 24l6.122-1.563A11.99 11.99 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.357 17.17c-.266.747-1.53 1.38-2.106 1.47-.562.088-1.288.124-2.066-.131-.854-.27-2.008-.662-3.454-1.742-2.54-1.785-4.21-4.698-4.34-4.908-.128-.211-1.04-1.392-1.04-2.657s.659-1.878.888-2.13c.222-.244.596-.305.795-.305s.397.005.572.01c.184.005.433-.07.672.516.266.641.911 2.223.993 2.382.081.159.136.352.025.563-.111.212-.167.339-.33.522-.164.182-.346.397-.495.535-.163.153-.334.318-.146.626.188.308.834 1.382 1.785 2.242 1.23 1.104 2.268 1.456 2.578 1.618.31.161.493.134.674-.083.181-.217.775-.888.983-1.196.206-.308.413-.267.688-.161.275.106 1.74.821 2.041.973.3.152.497.224.572.35.072.123.072.722-.194 1.47z" />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// }
