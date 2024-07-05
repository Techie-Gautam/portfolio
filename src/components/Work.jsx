import React, { useState, useEffect } from "react";
import projects from "../assets/data";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Button from "./Button";
// import { FaCircleArrowLeft } from "react-icons/fa";

function Work({ text }) {
  const [index, setIndex] = useState(0);
  const { id, title, imgSrc, description, url } = projects[index];

  const nextSlide = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex >= projects.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const prevSlide = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = projects.length - 1;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main id="work" className="lg:h-fit h-auto m-auto md:w-[80vw] w-[90vw] ">
      <h1 className="text-center p-4 border-b w-fit m-auto my-10 text-2xl font-bold ">
        WORK
      </h1>
      <section className="bg-gray-900 h-screen md:h-[60vh] xl:h-screen  w-full flex justify-center items-center rounded-lg">
        <div
          key={id}
          className="flex md:flex-row relative bg-white text-black w-[85vw] md:w-[60vw] px-4 py-6 rounded-lg  gap-3 items-center  shadow-white shadow-2xl "
        >
          <AiOutlineArrowLeft
            className="text-5xl absolute -left-6 p-2 rounded-full border-white border-2 text-blue-500 bg-white hover:bg-blue-500  hover:text-white duration-200  cursor-pointer"
            onClick={prevSlide}
          />
          <div className="flex md:flex-row flex-col gap-2">
            <div className=" md:w-[40%]  w-full h-[300px]  rounded-md overflow-hidden">
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-[50%] w-full text-center m-auto gap-4 flex flex-col items-center justify-center">
              <h2 className="uppercase font-bold text-2xl tracking-wider">
                {title}
              </h2>
              <p className="text-center text-xl">{description}</p>
              <a href={url} target="_blank">
                <Button text={"VIEW"} />{" "}
              </a>
            </div>
          </div>
          <AiOutlineArrowRight
            className="text-5xl absolute -right-6 p-2 rounded-full border-white border-2 text-blue-500 bg-white hover:bg-blue-500  hover:text-white duration-200  cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </section>
    </main>
  );
}

export default Work;
