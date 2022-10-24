import React from "react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Destination = ({ destinations }) => {
  const [index, setIndex] = useState(0);
  return (
    <section className="destination h-[80vh] lg:h-[90vh] pt-4 md:pt-12">
      <div className="h-[90%] w-[85%] md:w-[90%] xl:max-w-[1300px] mx-auto flex flex-col items-center gap-10">
        <SectionTitle number="01" text="Pick your destination" />
        <div className="h-full flex flex-col items-center gap-10 lg:flex-row">
          <div className="mx-auto w-52 md:w-[22vw] lg:w-[50%]">
            <img src={destinations[index].image.webp} alt="moon" />
          </div>
          <div className="flex flex-col items-center gap-3 w-full md:gap-5 lg:w-[50%] lg:items-start">
            <div className="nav w-[80%] md:w-[50%] max-w-[320px] flex justify-center text-lg text-accent-500 gap-6 font-ff-sans-cond uppercase tracking-widest lg:justify-start">
              <button className="cursor-pointer py-2 border-b-2 text-white border-b-white">
                Moon
              </button>
              <button
                className="cursor-pointer py-2 border-b-2"
                onClick={() => setIndex(1)}
              >
                Mars
              </button>
              <button className="cursor-pointer py-2 border-b-2">Europa</button>
              <button className="cursor-pointer py-2 border-b-2">Titan</button>
            </div>
            <h3 className="text-6xl uppercase pt-4 md:pt-6 md:text-7xl lg:text-fs-800">
              Moon
            </h3>
            <p className="text-center pb-12 text-accent-500 md:w-[90%] md:px-5 md:mx-auto lg:text-start lg:px-0 lg:w-[90%] lg:mx-0 lg:text-fs-400 xl:w-[70%]">
              See out planet as you've never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you're there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites
            </p>
            <div className="border-t border-gray-700 uppercase flex flex-col items-center gap-8 w-full text-center py-8 md:py-4 md:flex-row md:justify-center md:gap-28 lg:justify-start lg:text-start lg:py-8 lg:gap-14">
              <div className="flex flex-col gap-2">
                <p className="font-ff-sans-cond text-fs-300 text-accent-500">
                  avg. distance
                </p>
                <p className="font-ff-serif text-fs-600">384,400 KM</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-ff-sans-cond text-fs-300 text-accent-500">
                  est. travel time
                </p>
                <p className="font-ff-serif text-fs-600">3 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
