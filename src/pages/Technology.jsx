import React from "react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Technology = ({ technology }) => {
  const [index, setIndex] = useState(0);
  return (
    <section className="technology h-[80vh] lg: pt-4 md:pt-12 relative">
      <div className="flex flex-col items-center gap-8 md:grid md:grid-rows-[100px_1fr] md:grid-cols-12">
        <div className="col-start-2 col-end-12 row-start-1 row-end-2 xl:col-start-3">
          <SectionTitle number="03" text="Space launch 101" />
        </div>
        <div className="row-start-2 row-end-3 md:col-start-8 xl:col-start-9 2xl:col-start-10 col-end-13">
          <picture>
            <source
              media="(min-width: 765px)"
              srcSet={technology[index].images.portrait}
            />
            <img src={technology[index].images.landscape} alt="technology" />
          </picture>
        </div>
        <div className="flex flex-col items-center gap-2 row-start-2 row-end-3 col-start-2 col-end-8 lg:flex-row lg:gap-16 xl:gap-20 xl:col-start-3">
          <nav className="nav flex gap-3 mb-4 lg:flex-col lg:gap-5 xl:gap-8">
            <div className="font-ff-serif rounded-full border border-gray-700 w-10 aspect-square flex items-center justify-center cursor-pointer sm:w-12 bg-white/90 text-dark-500 lg:w-16 lg:text-xl xl:text-2xl xl:w-[4.5rem]">
              1
            </div>
            <div className="font-ff-serif rounded-full border border-gray-700 w-10 aspect-square flex items-center justify-center cursor-pointer sm:w-12 lg:w-16 lg:text-xl xl:text-2xl xl:w-[4.5rem]">
              2
            </div>
            <div className="font-ff-serif rounded-full border border-gray-700 w-10 aspect-square flex items-center justify-center cursor-pointer sm:w-12 lg:w-16 lg:text-xl xl:text-2xl xl:w-[4.5rem]">
              3
            </div>
          </nav>
          <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-5">
            <p className="uppercase font-ff-sans-cond text-fs-200 text-accent-500 lg:text-base">
              The terminology...
            </p>
            <h4 className="uppercase font-ff-serif text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl">
              Launch Vehicle
            </h4>
            <p className="text-center text-accent-500 pt-2 px-4 sm:px-0 sm:w-[70%] lg:w-full lg:text-start 2xl:w-[80%] xl:text-lg xl:leading-8">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
