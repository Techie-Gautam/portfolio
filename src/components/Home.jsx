import React, { useRef, useState } from "react";
import { animate, motion, stagger } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDoubleDown, BsTwitter, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import vid2 from '../assets/video/vid2.mp4'
import image1 from '../assets/images/image1.jpg'


function Home() {
    const [isHovered, setIsHovered] = useState(false);
    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientsCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed())
        })
    }

    const animationProjectsCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        });
    };



    const animations = {
        h1: {
            initial: {
                x: '-100%',
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        }
    }



    return (
        <div id="home" className="min-h-[90vh]  md:h-auto xl:h-[90vh] w-[90vw] md:w-[80vw] m-auto py-10 flex xl:flex-row flex-col-reverse lg:flex-col-reverse justify-center items-center lg:items-end border-t scroll-mt-[100px]">
            <section className="w-full flex flex-col lg:h-full md:h-auto lg:flex-shrink h-[90vh] items-start gap-5  sm:gap-7 md:gap-9 lg:gap-9 lg:justify-between justify-evenly relative">
                <motion.div {...animations.h1} className="tracking-wider text-left mt-2 sm:mt-5 w-full">
                    <p className="text-white font-semibold  text-2xl text-center lg:text-left">  Hi, my name is </p><span className=" font-semibold text-6xl text-white font-mons text-center block lg:text-left">Gautam</span><br /><h1 className="md:text-4xl xl:text-5xl -mt-4 sm:mt-0 text-sm sm:text-3xl text-center text-white lg:text-left">I build things for the web.</h1>
                </motion.div>

                <p className="text-2xl flex gap-2 font-mono uppercase self-center lg:self-start mt-6 sm:mt-0">
                    A
                    <Typewriter
                        options={{
                            strings: ["Developer", "Designer", "Creator"],
                            autoStart: true,
                            loop: true,
                        }}
                    />

                </p>

                <div className="flex gap-3">
                    <button className="bg-Color bg-color-gradient px-3 py-2 uppercase rounded font-semibold tracking-widest hover:scale-105">
                        Resume
                    </button>

                    <button
                        className="flex items-center gap-2 border-white px-3 py-2 rounded border-2 font-semibold tracking-wider"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Projects <BsArrowUpRight className={`transform duration-200 ${isHovered ? "rotate-45" : "rotate-0"}`} />
                    </button>
                </div>

                <article className="flex gap-7 text-2xl justify-between md:justify-start w-full md:w-fit  font-semibold text-white">
                    <div>
                        <p>+
                            <motion.span
                                ref={projectCount}
                                whileInView={animationProjectsCount}
                            >
                                500
                            </motion.span>
                        </p>
                        <span className="after:content-[''] flex justify-center after:w-full after:h-2 relative after:-bottom-4 after:bg-color-gradient after:absolute after:rounded-lg">Projects Done</span>
                    </div>

                    <div>
                        <p>+
                            <motion.span
                                whileInView={animationClientsCount}
                                ref={clientCount}
                            ></motion.span>
                        </p>
                        <span className="after:content-[''] flex justify-center after:w-full after:h-2 relative after:-bottom-4 after:bg-color-gradient after:absolute after:rounded-lg">Clients Worldwide</span>
                    </div>
                </article>

                <div className="flex gap-5 items-center text-3xl justify-evenly md:justify-start w-full">
                    <a href="https://x.com/home" target="_blank" className="hover:text-Color duration-200"><BsTwitter /> </a>
                    <a href="https://www.linkedin.com/feed/" target="_blank" className="hover:text-Color duration-200"><BsLinkedin /> </a>
                    <a href="https://github.com/Techie-Gautam" target="_blank" className="hover:text-Color duration-200"><BsGithub /> </a>
                    <a href="" className="hover:text-Color duration-200"><BsInstagram /> </a>
                </div>

            </section>

           <a href="#work" className="absolute bottom-0"><BsChevronDoubleDown className=" text-5xl animate-bounce  xl:mr-14"/></a>

            <section className="h-full w-full md:h-[50vh] xl:h-full rounded overflow-hidden ">
                <video autoPlay={true} loop={true} muted={true} src={vid2} className=" hidden lg:block lg:w-full h-full object-cover"></video>
                <img className="lg:hidden h-full w-full object-cover" src={image1} alt="" />
            </section>
        </div >
    )
}

export default Home;
