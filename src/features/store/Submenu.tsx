import React from "react";

import Select from "../../ui/Select";
import MySlider from "../../ui/Slider";

export default function Submenu() {
  return (
    <section className="space-between flex h-[40rem] flex-col items-center justify-center gap-10 rounded-lg bg-color-primary">
      <div className="relative flex flex-col items-center justify-center gap-5">
        <Select />
      </div>
      <div className="flex flex-col items-center justify-center">
        <MySlider />
      </div>
      <div className="flex h-[17rem] w-[11rem] flex-col items-center justify-between  rounded-md bg-white py-5">
        <h2 className="font-ibm-plex font-bold text-color-primary">CART</h2>

        <div className="flex flex-row items-center justify-between gap-2 p-2">
          <p className="flex h-6 w-6 items-center justify-center rounded-full bg-color-primary p-1 text-sm text-white">
            1
          </p>
          <p className="flex items-center text-[10px]">THE LEISURE</p>
          <p className="flex h-6 items-center justify-center rounded-md bg-color-primary p-2 text-xs text-white">
            350.00
          </p>
        </div>

        <button className="rounded-2xl bg-color-primary px-3 py-2 text-sm text-white">
          TOTAL 350.00
        </button>
      </div>
    </section>
  );
}
