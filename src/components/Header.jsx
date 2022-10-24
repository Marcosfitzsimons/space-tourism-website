import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-[85%] md:w-full md:pl-8 lg:pl-12 xl:pl-24 mx-auto flex items-center justify-between py-4 md:py-0">
        <div className="logo-container">
          <img src={logo} alt="space tourism logo" />
        </div>
        <nav className="hidden md:flex md:items-center lg:w-[95%]">
          <div className="hidden relative left-7 z-40 h-[.1rem] bg-gray-600/60 lg:flex lg:w-[100%]"></div>
          <ul className="px-14 flex items-center gap-10 bg-white/5 backdrop-blur-xl md:px-20 md:gap-12 lg:px-32 xl:px-40 xl:pr-56 lg:gap-16">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-white"
                    : "hover:border-b-white/20 border-b-transparent"
                } transition cursor-pointer py-8 font-ff-sans-cond uppercase tracking-widest border-b-[3px] flex items-center gap-2 text-[.9rem] lg:text-fs-300 hover:translate-x-1`
              }
            >
              <span className="hidden font-bold lg:flex lg:text-[1.05rem] pr-1">
                01
              </span>
              Home
            </NavLink>
            <NavLink
              to="destination"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-white"
                    : "hover:border-b-white/20 border-b-transparent"
                } transition cursor-pointer py-8 font-ff-sans-cond uppercase tracking-widest border-b-[3px] flex items-center gap-2 text-[.9rem] lg:text-fs-300 hover:translate-x-1`
              }
            >
              <span className="hidden font-bold lg:flex lg:text-[1.05rem]">
                02
              </span>
              Destination
            </NavLink>
            <NavLink
              to="crew"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-white"
                    : "hover:border-b-white/20 border-b-transparent"
                } transition cursor-pointer py-8 font-ff-sans-cond uppercase tracking-widest border-b-[3px]  flex items-center gap-2 text-[.9rem] lg:text-fs-300 hover:translate-x-1`
              }
            >
              <span className="hidden font-bold lg:flex lg:text-[1.05rem]">
                03
              </span>
              Crew
            </NavLink>
            <NavLink
              to="technology"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-white"
                    : "hover:border-b-white/20 border-b-transparent"
                } transition cursor-pointer py-8 font-ff-sans-cond uppercase tracking-widest border-b-[3px] flex items-center gap-2 text-[.9rem] lg:text-fs-300 hover:translate-x-1`
              }
            >
              <span className="hidden font-bold lg:flex lg:text-fs-300">
                04
              </span>
              Technology
            </NavLink>
          </ul>
        </nav>
        <button className="menu-toggle md:hidden" aria-controls="nav-mobile">
          <span className="sr-only" aria-expanded="false">
            Menu
          </span>
          <FiMenu className="text-3xl cursor-pointer text-accent-500" />
        </button>
        <nav className="hidden">
          <ul
            id="nav-mobile"
            className="nav-mobile absolute z-50 inset-y-0 right-0 left-[30%] flex flex-col gap-7 py-[min(20rem,15vh)] px-8 bg-white/5 backdrop-blur-xl uppercase font-ff-sans-cond text-fs-400 tracking-widest"
          >
            <li className="flex items-center gap-3 cursor-pointer">
              <span className="font-bold pr-1">01</span>Home
            </li>
            <li className="flex items-center gap-3 cursor-pointer">
              <span className="font-bold">02</span>Destination
            </li>
            <li className="flex items-center gap-3 cursor-pointer">
              <span className="font-bold">03</span>Crew
            </li>
            <li className="flex items-center gap-3 cursor-pointer">
              <span className="font-bold">04</span>Technology
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
