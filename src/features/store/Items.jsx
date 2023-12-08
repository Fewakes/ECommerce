import React from "react";
import Item from "./Item.jsx";
import { items } from "../../data/data.js";

export default function Items() {
  return (
    <div className="flex flex-wrap">
      {items.map((item) => (
        <Item
          id={item.id}
          key={item.id}
          productsPhoto={item.productPhoto}
          productName={item.productName}
          productPrice={item.productPrice}
        />
      ))}
    </div>
  );
}
