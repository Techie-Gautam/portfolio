import React from "react";
import { motion } from "framer-motion";
import '../styles/timeline.scss'
import { AiFillIeCircle, AiFillFormatPainter, AiOutlineAntDesign, AiFillWindows } from "react-icons/ai";

function Services() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1
    },
    one: {
      opacity: 0,
      x: "-100%"
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%"
    },
    four: {
      opacity: 0,
      x: "-100%"
    }
  }


  return (
    <div id="services" className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-7">
      <h2 className="text-2xl uppercase font-semibold tracking-wider p-3 border-b-2 border-white">SERVICES</h2>
      <section className="grid grid-cols-3 h-[40vh] w-[70vw] lg:w-[60vw] gap-3">
        <motion.div
        className="serviceBox1 bg-pink-50 text-black flex justify-center items-center flex-col  grid-rows-[1/3] w-full h-full hover:shadow-md hover:shadow-white"
        whileInView={animations.whileInView}
        initial={animations.one}
        >
          <p className="text-7xl">2+</p>
          <p className="text-2xl font-semibold">Year Experience</p>
        </motion.div>

        <motion.div
        className=" serviceBox2 bg-white text-center px-1 text-black flex justify-center items-center flex-col  hover:shadow-md hover:shadow-white"
        whileInView={animations.whileInView}
        initial={animations.twoAndThree}
        transition={{
          delay: 0.2
        }}
        >
          <AiFillIeCircle className="text-5xl" />
          <p className="text-2xl font-semibold">Web development</p>
        </motion.div>

        <motion.div
        className="serviceBox3 text-center bg-white text-black px-1 flex justify-center items-center flex-col  hover:shadow-md hover:shadow-white"
        whileInView={animations.whileInView}
        initial={animations.twoAndThree}
        transition={{
          delay: 0.4
        }}
        >
          <AiFillFormatPainter className="text-5xl" />
          <p className="text-2xl font-semibold">Web Design</p>
        </motion.div>

        <motion.div
        className="serviceBox4 bg-white text-black flex justify-center items-center flex-col  hover:shadow-md hover:shadow-white"
        whileInView={animations.whileInView}
        initial={animations.four}
        >
          <AiFillWindows className="text-5xl" />
          <p className="text-2xl font-semibold">Desktop Development</p>
        </motion.div>

      </section>
    </div>
  )
}

export default Services;
