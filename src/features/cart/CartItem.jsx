/* eslint-disable react/prop-types */
import React from "react";
import { getCurrentQuantityById } from "../../context/CartReducer";
import { useSelector } from "react-redux";

export default function CartItem({ item }) {
  const { id, productPhoto, productName, productPrice } = item;
  const currentQuantity = useSelector((state) =>
    getCurrentQuantityById(state, id),
  );
  console.log(currentQuantity);
  return (
    <div className=" flex w-[40rem] items-center  justify-between gap-[8rem]">
      <div className="flex items-center gap-2">
        <img
          src={productPhoto}
          alt="A product"
          className="h-[6rem] w-[6rem] rounded-3xl"
        />
        <div className="flex flex-col items-center">
          <p className="text-xl">{productName} </p>
          <p>Collection: Orange</p>
        </div>
      </div>
      <p> {currentQuantity} </p>
      <p>£{currentQuantity * productPrice}.00 </p>
    </div>
  );
}
