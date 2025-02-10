import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_fzgrkwv",
        "template_zv522g4",
        formData,
        "2WMvtClXu__c_yJa_"
      )
      .then(
        (response) => {
          toast.success("Message sent successfully! 🎉"); // Success toast
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message. Please try again later. 😞"); // Error toast
        }
      );
  };

  return (
    <div className="py-16 bg-primary-content text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-center glowing-text mb-6">
        CONTACT
      </h1>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-base-100 p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <label className="block text-gray-400 text-left mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#6abdf5] transition-all"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 text-left mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#6abdf5] transition-all"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 text-left mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter the subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#6abdf5] transition-all"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 text-left mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#6abdf5] transition-all"
            required
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#6abdf5] to-[#f56abb] text-white font-bold rounded-lg hover:opacity-90 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Toaster for displaying notifications */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
