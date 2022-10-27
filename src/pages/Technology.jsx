import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const Technology = ({ technology }) => {
  const [index, setIndex] = useState(0);

  const technologyTabs = [
    {
      id: 1,
      content: 1,
    },
    {
      id: 2,
      content: 2,
    },
    {
      id: 3,
      content: 3,
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
        type: "spring",
        mass: 0.8,
        damping: 10,
        stiffness: 50,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
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
      className="technology h-[80vh] lg: pt-4 md:pt-12 relative"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center gap-8 md:grid md:grid-rows-[100px_1fr] md:grid-cols-12">
        <div className="col-start-2 col-end-12 row-start-1 row-end-2 xl:col-start-3">
          <SectionTitle number="03" text="Space launch 101" />
        </div>
        <motion.div
          className="row-start-2 row-end-3 md:col-start-8 xl:col-start-9 2xl:col-start-10 col-end-13"
          variants={childVariants}
        >
          <picture>
            <source
              media="(min-width: 765px)"
              srcSet={technology[index].images.portrait}
            />
            <img src={technology[index].images.landscape} alt="technology" />
          </picture>
        </motion.div>
        <div className="flex flex-col items-center gap-2 row-start-2 row-end-3 col-start-2 col-end-8 lg:flex-row lg:gap-16 xl:gap-20 xl:col-start-3">
          <motion.div
            className="nav flex gap-3 mb-4 lg:flex-col lg:gap-5 xl:gap-8"
            variants={childVariants}
          >
            {technologyTabs.map((tab) => {
              return (
                <button
                  key={tab.id}
                  onClick={() => setIndex(tab.id - 1)}
                  aria-selected={index === tab.id - 1 ? "true" : "false"}
                  role="tab"
                  className={`${
                    index === tab.id - 1
                      ? "bg-white/90 text-dark-500"
                      : "text-white/90"
                  } font-ff-serif rounded-full border border-gray-700 w-10 aspect-square flex items-center justify-center cursor-pointer sm:w-12 lg:w-16 lg:text-xl xl:text-2xl xl:w-[4.5rem] transition ease-in-out duration-300`}
                >
                  {tab.content}
                </button>
              );
            })}
          </motion.div>
          <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-5">
            <motion.p
              className="uppercase font-ff-sans-cond text-fs-200 text-accent-500 lg:text-base"
              variants={childVariants}
            >
              The terminology...
            </motion.p>
            <motion.h4
              className="uppercase font-ff-serif text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl"
              variants={childVariants}
            >
              {technology[index].name}
            </motion.h4>
            <motion.p
              className="text-center text-accent-500 pt-2 px-4 sm:px-0 sm:w-[70%] lg:w-full lg:text-start 2xl:w-[80%] xl:text-lg xl:leading-8"
              variants={childVariants}
            >
              {technology[index].description}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Technology;
