/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function Item({ productsPhoto, productName, productPrice, id }) {
  return (
    <div className=" mb-10 flex w-[14rem] flex-col items-center gap-3 rounded-md bg-white p-4 shadow-md">
      <Link to={`/product/${id}`}>
        <img
          src={productsPhoto}
          alt="A photo of a product"
          className="h-[12rem] w-[12rem] rounded-md object-cover"
        />
      </Link>
      <div className="text-center font-semibold uppercase text-gray-700">
        {productName}
      </div>
      <div className="text-center text-sm font-bold text-gray-500">
        £{productPrice}.00
      </div>
      <button className="w-[10rem] rounded-xl bg-color-primary py-2 text-sm text-white transition-colors duration-200 hover:bg-color-primary-dark">
        Add to Basket
      </button>
    </div>
  );
}

export default Item;
