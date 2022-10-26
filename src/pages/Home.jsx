import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
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
        delay: 0.2,
        stiffness: 50,
      },
    },
  };

  return (
    <motion.section
      className="pt-8 h-[80vh] lg:h-[90vh]"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="h-full w-[85%] xl:max-w-[1300px] mx-auto flex flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-col items-center gap-3 lg:gap-0 lg:items-start lg:w-[50%]">
          <h1 className="flex flex-col items-center uppercase text-accent-500 font-ff-sans-cond text-fs-300 md:text-[1.5rem] lg:text-fs-500 lg:items-start">
            So, you want to travel to
            <span className="uppercase text-white text-[5rem] font-ff-serif md:leading-tight md:text-[9rem] lg:text-fs-900 lg:my-6">
              space
            </span>
          </h1>
          <p className="text-accent-500 text-center md:w-[65%] md:text-lg md:leading-8 lg:text-start lg:w-[85%] xl:w-[70%]">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="btn-container">
          <Link
            to="destination"
            className="cursor-pointer p-[min(15vw,4.8rem)] bg-white text-dark-500 text-xl tracking-widest font-ff-serif uppercase aspect-square rounded-full flex justify-center items-center z-0 md:text-2xl lg:text-4xl lg:mt-24"
          >
            Explore
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
