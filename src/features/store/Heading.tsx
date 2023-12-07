import React from "react";

import { SlBasket } from "react-icons/sl";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Heading() {
  return (
    <header className="flex items-center justify-between">
      <p className="font-ibm-plex  text-center text-4xl font-bold text-color-primary">
        E-COMMERCE.
      </p>
      <input
        placeholder="search..."
        className="h-[2.5rem] w-[30rem] rounded-2xl pl-5 shadow-custom transition-transform focus:scale-105 focus:outline-none"
      />
      <div className="flex items-center gap-10">
        <SlBasket size={32} color="green" />
        <div className="flex items-center">
          <img
            src="/profile-pic.png"
            alt="Profile Picture"
            className="h-[50px] w-[50px] rounded-full"
          />
          <MdKeyboardArrowDown size={28} color="green" />
        </div>
      </div>
    </header>
  );
}
