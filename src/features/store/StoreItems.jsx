import React from "react";
import StoreItem from "./StoreItem.jsx";
import { items } from "../../data/data.js";

export default function StoreItems() {
  return (
    <div className=" mt-10 flex  flex-wrap  gap-7 ">
      {items.map((item) => (
        <StoreItem
          id={item.id}
          key={item.id}
          productsPhoto={item.productPhoto}
          productName={item.productName}
          productPrice={item.productPrice}
          productDescription={item.productDescription}
          productPhoto={item.productPhoto}
        />
      ))}
    </div>
  );
}
