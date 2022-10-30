import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const Crew = ({ crew }) => {
  const [index, setIndex] = useState(0);

  const imgStyle = {
    position: index === 0 ? "relative" : "",
    left: index === 0 ? "1rem" : "",
  };

  const crewTabs = [
    {
      id: 1,
      name: "Slide title",
    },
    {
      id: 2,
      name: "Slide title",
    },
    {
      id: 3,
      name: "Slide title",
    },
  ];

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: "100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        mass: 0.8,
        damping: 10,
        stiffness: 50,
      },
    },
    exit: {
      y: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      x: -25,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.section
      className="crew h-[80vh] lg:h-[90vh] pt-4 md:pt-12"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="h-[90%] w-[85%] md:w-[90%] xl:max-w-[1300px] mx-auto flex flex-col items-center gap-10">
        <SectionTitle number="02" text="Meet your crew" />
        <div className="h-full flex flex-col items-center gap-10 lg:flex-row lg:w-full lg:items-end lg:mb-16">
          <div className="border-b border-gray-700 w-full flex justify-center md:w-auto md:absolute md:bottom-0 lg:right-20 lg:w-1/2 lg:border-0">
            <div className="w-44 md:w-72 lg:w-96 xl:w-[30rem]">
              <motion.img
                src={crew[index].image.webp}
                alt={crew[index].name}
                style={imgStyle}
                variants={childVariants}
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:w-1/2 lg:text-start">
            <motion.div
              className="flex gap-3 pb-6 md:order-4 md:py-7 lg:pt-20 lg:gap-5"
              variants={childVariants}
            >
              {crewTabs.map((tab) => {
                return (
                  <button
                    className={`${
                      index === tab.id - 1
                        ? "bg-white"
                        : "hover:bg-dark-300 bg-dark-400"
                    } transition ease-in-out duration-300 w-[0.6rem] aspect-square rounded-full cursor-pointer lg:w-3`}
                    key={tab.id}
                    role="tab"
                    onClick={() => setIndex(tab.id - 1)}
                    aria-selected={index === tab.id - 1 ? "true" : "false"}
                  >
                    <span className="sr-only">{tab.name}</span>
                  </button>
                );
              })}
            </motion.div>
            <motion.h2
              className="text-2xl font-ff-serif uppercase flex flex-col md:text-4xl md:gap-2 lg:text-5xl xl:text-fs-700"
              variants={childVariants}
            >
              <motion.span
                className="uppercase text-lg font-ff-serif text-[#828589] md:text-xl lg:text-fs-600"
                variants={childVariants}
              >
                {crew[index].role}
              </motion.span>
              {crew[index].name}
            </motion.h2>
            <motion.p
              className="pt-4 text-accent-500 md:w-[70%] md:leading-7 xl:text-fs-400 xl:leading-8"
              variants={childVariants}
            >
              {crew[index].bio}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Crew;
