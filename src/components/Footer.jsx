import React from "react";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

import user from '../assets/images/avatar.png'


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 flex flex-col items-center justify-center space-y-8">
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={user}
          alt="Founder"
          className="w-24 h-24 rounded-full mb-4 border-4 border-white"
        />

        <h2 className="text-3xl font-bold">Gautam</h2>
        <p className="text-center text-gray-400 mt-2 font-semibold tracking-wider">
          Motivation is temporary, but discipline lasts forever.
        </p>
      </motion.div>

      <motion.aside 
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Social Media</h2>

        <article className="flex space-x-6 text-3xl">
          <motion.a 
            href="https://youtube.com" 
            target={"_blank"} 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#FF0000" }}
            whileTap={{ scale: 0.9 }}
            className="transition-all"
          >
            <AiFillYoutube />
          </motion.a>
          <motion.a 
            href="https://instagram.com" 
            target={"_blank"} 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#E1306C" }}
            whileTap={{ scale: 0.9 }}
            className="transition-all"
          >
            <AiFillInstagram />
          </motion.a>
          <motion.a 
            href="https://github.com/Techie-Gautam" 
            target={"_blank"} 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#6e5494" }}
            whileTap={{ scale: 0.9 }}
            className="transition-all"
          >
            <AiFillGithub />
          </motion.a>
        </article>
      </motion.aside>

      <motion.a 
        href="#home"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl hover:text-blue-500 transition-colors border-white border-2 rounded-full p-2 hover:bg-white"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <AiOutlineArrowUp />
      </motion.a>
    </footer>
  );
};

export default Footer;

