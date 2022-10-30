import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const Destination = ({ destinations }) => {
  const [index, setIndex] = useState(0);

  const destinationTabs = [
    {
      id: 1,
      name: "Moon",
    },
    {
      id: 2,
      name: "Mars",
    },
    {
      id: 3,
      name: "Europa",
    },
    {
      id: 4,
      name: "Titan",
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
      className="destination h-[80vh] lg:h-[90vh] pt-4 md:pt-12"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="h-[90%] w-[85%] md:w-[90%] xl:max-w-[1300px] mx-auto flex flex-col items-center gap-10">
        <SectionTitle number="01" text="Pick your destination" />
        <div className="h-full flex flex-col items-center gap-10 lg:flex-row">
          <div className="mx-auto w-52 md:w-[22vw] lg:w-[50%]">
            <motion.img
              src={destinations[index].image.webp}
              alt={destinations[index].name}
              variants={childVariants}
            />
          </div>
          <div className="flex flex-col items-center gap-3 w-full md:gap-5 lg:w-[50%] lg:items-start">
            <motion.div
              className="w-[80%] md:w-[50%] max-w-[320px] flex justify-center text-lg text-accent-500 gap-6 font-ff-sans-cond uppercase tracking-widest lg:justify-start"
              variants={childVariants}
            >
              {destinationTabs.map((tab) => {
                return (
                  <button
                    className={`${
                      index === tab.id - 1
                        ? "border-b-white"
                        : "border-b-transparent"
                    } transition ease-in-out duration-300 cursor-pointer py-2 border-b-2 text-white lg:text-xl`}
                    onClick={() => setIndex(tab.id - 1)}
                    key={tab.id}
                    aria-selected={index === tab.id - 1 ? "true" : "false"}
                    role="tab"
                  >
                    {tab.name}
                  </button>
                );
              })}
            </motion.div>
            <motion.h3
              className="text-6xl uppercase pt-4 md:pt-6 md:text-7xl lg:text-fs-800"
              variants={childVariants}
            >
              {destinations[index].name}
            </motion.h3>
            <motion.p
              className="text-center pb-12 text-accent-500 md:w-[90%] md:px-5 md:mx-auto lg:text-start lg:px-0 lg:w-[90%] lg:mx-0 lg:text-fs-400 xl:w-[70%]"
              variants={childVariants}
            >
              {destinations[index].description}
            </motion.p>
            <motion.div
              className="border-t border-gray-700 uppercase flex flex-col items-center gap-8 w-full text-center py-8 md:py-4 md:flex-row md:justify-center md:gap-28 lg:justify-start lg:text-start lg:py-8 lg:gap-14"
              variants={childVariants}
            >
              <div className="flex flex-col gap-2">
                <p className="font-ff-sans-cond text-fs-300 text-accent-500">
                  avg. distance
                </p>
                <p className="font-ff-serif text-fs-600">
                  {destinations[index].distance}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-ff-sans-cond text-fs-300 text-accent-500">
                  est. travel time
                </p>
                <p className="font-ff-serif text-fs-600">
                  {destinations[index].distance}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Destination;
