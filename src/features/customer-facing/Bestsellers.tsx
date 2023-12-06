import React from "react";

import { BsStars } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { BsGlobeAmericas } from "react-icons/bs";
import { TbCube } from "react-icons/tb";

export default function Bestsellers() {
  return (
    <section className="mt-20  ">
      <h2 className="mb-12 text-4xl font-semibold">Our bestselling chairs</h2>
      <div className="flex justify-between ">
        {/* 1 */}
        <div className="h-[31rem] w-[17rem] overflow-hidden rounded-md shadow-custom">
          <img src="chair-1.jpg" alt="Chair" />
          <div className="p-[24px]">
            <h3 className="mb-6 text-xl font-semibold">The laid back</h3>
            <ul className="flex flex-col">
              <li className="mb-4 flex items-center gap-3">
                <BsStars size={24} color="green" />
                <span>Leisure and relaxing</span>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <BsClock size={24} color="green" />
                <span>Comfortable for 4h</span>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <BsGlobeAmericas size={24} color="green" />
                <span>Vegan leather</span>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <TbCube size={24} color="green" />
                <span>Weighs 16 kg</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center justify-center gap-10">
              <strong className="text-lg">£200</strong>
              <button className="inline-block rounded-full bg-color-primary p-1.5 px-3 text-sm uppercase text-white no-underline">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="h-[31rem] w-[17rem] overflow-hidden rounded-md shadow-custom">
          <img src="chair-2.jpg" alt="Chair" />
          <div className="p-[24px]">
            <h3 className="mb-6 text-xl font-semibold">The Worker Bee</h3>
            <ul className="flex flex-col">
              <li className="mb-4 flex items-center gap-3">
                <BsStars size={24} color="green" />
                <span>Work</span>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <BsClock size={24} color="green" />
                <span>Comfortable for 8h</span>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <BsGlobeAmericas size={24} color="green" />
                <span>Vegan leather</span>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <TbCube size={24} color="green" />
                <span>Weighs 22 kg</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center justify-center gap-10">
              <strong className="text-lg">£400</strong>
              <button className="inline-block rounded-full bg-color-primary p-1.5 px-3 text-sm uppercase text-white no-underline">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="h-[31rem] w-[17rem] overflow-hidden rounded-md shadow-custom">
          <img src="chair-3.jpg" alt="Chair" />
          <div className="p-[24px]">
            <h3 className="mb-6 text-xl font-semibold">The Chair 4/2</h3>
            <ul className="flex flex-col">
              <li className="mb-4 flex items-center gap-3">
                <BsStars size={24} color="green" />
                <span>Leisure and relaxing</span>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <BsClock size={24} color="green" />
                <span>Comfortable all day!</span>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <BsGlobeAmericas size={24} color="green" />
                <span>Organic cotton</span>
              </li>
              <li className="mb-4 flex items-center gap-3">
                <TbCube size={24} color="green" />
                <span>Weighs 80 kg</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center justify-center gap-10">
              <strong className="text-lg">£950</strong>
              <button className="inline-block rounded-full bg-color-primary p-1.5 px-3 text-sm uppercase text-white no-underline">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
