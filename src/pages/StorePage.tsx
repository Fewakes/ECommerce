import React from "react";
import Heading from "../features/store/Heading";
import Submenu from "../features/store/Submenu";
import Content from "../features/store/Content";

export default function StorePage() {
  return (
    <div className="mx-auto grid w-full max-w-screen-xl grid-cols-5 md:p-5 lg:p-8">
      <div className="col-span-5">
        <Heading />
      </div>
      <div className="col-span-5 mt-20 grid grid-cols-5 gap-10">
        <div className="col-span-1">
          <Submenu />
        </div>
        <div className="col-span-4">
          <Content />
        </div>
      </div>
    </div>
  );
}
