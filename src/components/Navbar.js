// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaGithub, FaLinkedin } from "react-icons/fa";



// export default function Navbar() {
//   return (
//     <div className="navbar bg-primary-content">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           {/* <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-accent-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
//           >
//             <li>
//               <Link to="/home">
//                 HOME
//               </Link>
//             </li>
//             <li>
//             <Link to="/skills">
//                 SKILLS
//               </Link>
//             </li>
//             <li>
//               <a>Button 3</a>
//             </li>
//             <li>
//               <a>Button 4</a>
//             </li>
//           </ul> */}
//         </div>
//         <a className="btn btn-ghost text-xl glowing-text">KAUSHIK MANDAVKAR</a>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         {/* Add additional menu items here if needed */}
//       </div>

//       <div className="navbar-end">
//         <a
//           href="https://github.com/kaushikmandavkar"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn btn-ghost text-xl"
//         >
//           <FaGithub />
//         </a>
//         <a
//           href="https://linkedin.com/in/kaushikmandavkar"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn btn-ghost text-xl"
//         >
//           <FaLinkedin />
//         </a>
//       </div>

     
//     </div>
//   );
// }

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar bg-primary-content px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-accent-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a
                href="https://github.com/heavykaushik1520"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/kaushik-mandavkar-909158229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl glowing-text">KAUSHIK MANDAVKAR</a>
      </div>

      <div className="navbar-end hidden lg:flex space-x-4">
        <a
          href="https://github.com/heavykaushik1520"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kaushik-mandavkar-909158229/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost text-xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
