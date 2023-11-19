"use client";
import React, { useState } from "react";
import { links } from "@/constants";

const Filters = () => {
  const [active, setActive] = useState("");


  const hadleFilter = (link: string) => {
    setActive(link);
  };
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          className={`${
            active === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
          key={link}
          onClick={() => hadleFilter(link)}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
