import React from "react";

const SectionTitle = ({ number, text }) => {
  return (
    <div className="md:self-start">
      <h3 className="font-ff-sans-cond uppercase text-fs-300 md:text-fs-400 md:flex md:items-center lg:text-fs-500">
        <span
          className="text-dark-400/80 font-bold mr-4 md:text-[1.2rem] xl:text-fs-500"
          aria-hidden="true"
        >
          {number}
        </span>
        {text}
      </h3>
    </div>
  );
};

export default SectionTitle;
