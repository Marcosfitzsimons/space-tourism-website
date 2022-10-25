import React from "react";
import { useState } from "react";
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

  return (
    <section className="crew h-[80vh] lg:h-[90vh] pt-4 md:pt-12">
      <div className="h-[90%] w-[85%] md:w-[90%] xl:max-w-[1300px] mx-auto flex flex-col items-center gap-10">
        <SectionTitle number="02" text="Meet your crew" />
        <div className="h-full flex flex-col items-center gap-10 lg:flex-row lg:w-full lg:items-end lg:mb-16">
          <div className="border-b border-gray-700 w-full flex justify-center md:w-auto md:absolute md:bottom-0 lg:right-20 lg:w-1/2">
            <div className="w-44 md:w-72 lg:w-96 xl:w-[30rem]">
              <img src={crew[index].image.webp} alt="crew" style={imgStyle} />
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:w-1/2 lg:text-start">
            <div className="flex gap-3 pb-6 md:order-4 md:py-7 lg:pt-20 lg:gap-5">
              {crewTabs.map((tab) => {
                return (
                  <button
                    className={`${
                      index === tab.id - 1 ? "bg-white" : "hover:bg-dark-300"
                    } w-[0.6rem] aspect-square rounded-full bg-dark-400 cursor-pointer lg:w-3`}
                    key={tab.id}
                    role="tab"
                    onClick={() => setIndex(tab.id - 1)}
                    aria-selected={index === tab.id - 1 ? "true" : "false"}
                  >
                    <span className="sr-only">{tab.name}</span>
                  </button>
                );
              })}
            </div>
            <h2 className="text-2xl font-ff-serif uppercase flex flex-col md:text-4xl md:gap-2 lg:text-5xl xl:text-fs-700">
              <span className="uppercase text-lg font-ff-serif text-[#828589] md:text-xl lg:text-fs-600">
                {crew[index].role}
              </span>
              {crew[index].name}
            </h2>
            <p className="pt-4 text-accent-500 md:w-[70%] md:leading-7 xl:text-fs-400 xl:leading-8">
              {crew[index].bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
