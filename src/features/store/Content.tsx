import React from "react";
import Items from "./Items";

export default function Content() {
  return (
    <section className=" flex h-[40rem]">
      <div className="flex flex-grow flex-col gap-10">
        <div className="flex items-center justify-between">
          <p className="">10 Results found...</p>
          <p>A to Z</p>
          <p>Colletion</p>
        </div>
        <Items />
      </div>
    </section>
  );
}
