/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function Item({ productsPhoto, productName, productPrice, id }) {
  return (
    <div className="mb-10 flex w-[12rem] flex-col gap-3">
      <Link to={`/product/${id}`}>
        <img
          src={productsPhoto}
          alt="A photo of a product"
          className="h-[10rem] w-[12rem] rounded-md "
        />
      </Link>
      <div className="font-ibm-plex  text-center font-bold uppercase">
        {productName}
      </div>
      <div className="font-ibm-plex text-center text-xs font-bold">
        £{productPrice}.00
      </div>
      <div className="flex justify-center">
        <button className="w-[8rem] rounded-xl bg-color-primary px-3 text-sm text-white ">
          add to basket
        </button>
      </div>
    </div>
  );
}

export default Item;
