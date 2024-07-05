import React from "react";
import { useState } from "react";
import { FaHamburger, FaWindowClose } from "react-icons/fa";

function Header({ menuOpen, setMenuOpen }) {
  return (
    <>
      <nav className="flex justify-between items-center sticky top-0 h-[10vh] w-[90vw] md:w-[90vw] lg:w-[80vw] m-auto z-10">
        <NavContent />
        <FaHamburger
          className="sm:hidden text-xl hover:text-violet-500 cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
      </nav>
    </>
  );
}

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`sm:hidden fixed h-full w-full bg-gray-900 z-20 flex items-center flex-col justify-center translate-y-[-100%] duration-300 ease-linear ${menuOpen ? "translate-y-0" : ""}`}
    >
      <FaWindowClose
        className="absolute top-10 right-10 text-3xl hover:text-red-500 duration-200 cursor-pointer "
        onClick={() => setMenuOpen(false)}
      />
      <div className="flex flex-col justify-between items-center text-xl gap-10">
        <h2 className="text-3xl font-bold tracking-wider uppercase">Gautam.</h2>
        <a
          onClick={() => setMenuOpen(false)}
          href="#home"
          className={`hover:text-Color duration-200 `}
        >
          Home
        </a>
        <a
          onClick={() => setMenuOpen(false)}
          href="#work"
          className={`hover:text-Color duration-200`}
        >
          Work
        </a>
        <a
          onClick={() => setMenuOpen(false)}
          href="#timeline"
          className={`hover:text-Color duration-200 `}
        >
          Timeline
        </a>
        <a
          onClick={() => setMenuOpen(false)}
          href="#services"
          className={`hover:text-Color duration-200 `}
        >
          Services
        </a>
        <a
          onClick={() => setMenuOpen(false)}
          href="#contact"
          className={`hover:text-Color duration-200 `}
        >
          Contact
        </a>
        <a
          onClick={() => setMenuOpen(false)}
          href="mailto:gautm.techie4803@gmail.com"
        >
          <button className="bg-color-gradient px-3 py-2 rounded font-semibold tracking-wider hover:scale-105 block">
            HIRE ME
          </button>
        </a>
      </div>
    </div>
  );
};

const NavContent = () => {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-wider uppercase">Gautam.</h2>
      <div className="sm:flex md:gap-6 sm:gap-2 items-center text-xl hidden">
        <a href="#home" className={`hover:text-Color duration-200 `}>
          Home
        </a>
        <a href="#work" className={`hover:text-Color duration-200`}>
          Work
        </a>
        <a href="#timeline" className={`hover:text-Color duration-200 `}>
          Timeline
        </a>
        <a href="#services" className={`hover:text-Color duration-200 `}>
          Services
        </a>
        <a href="#contact" className={`hover:text-Color duration-200 `}>
          Contact
        </a>
      </div>
      <a href="mailto:gautm.techie4803@gmail.com">
        <button className="bg-color-gradient px-3 py-2 rounded font-semibold tracking-wider hover:scale-105 hidden sm:block">
          HIRE ME
        </button>
      </a>
    </>
  );
};

export default Header;
