import React from "react";

export default function Submenu() {
  return (
    <section className="flex h-[40rem] flex-col items-center gap-10 rounded-lg bg-color-primary">
      <div className="">
        <h2>Collection</h2>
        <select>
          <option>Oranges</option>
          <option>Lemons</option>
          <option>Plums</option>
        </select>
        <img></img>
      </div>
      <div className="">
        <h2>Price Range</h2>
        <input type="range"></input>
      </div>
      <div className="">Basket</div>
    </section>
  );
}
