import React from "react";
import { Link, useParams } from "react-router-dom";
import { items } from "../data/data.js";

interface RouteParams {
  id: string;
}

export default function Product() {
  const { id } = useParams<RouteParams>();
  const productId = Number(id);
  const product = items.find((item: Item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { productPhoto, productName, productDescription } = product;

  return (
    <div className="w-[60rem] rounded-lg bg-white">
      <div className="flex items-center gap-10">
        <img
          src={`/${productPhoto}`}
          alt="A photo of a product"
          className="h-[20rem]"
        />
        <div className="flex w-[30rem] flex-col gap-10">
          <div className="text-3xl">{productName}</div>
          <div>{productDescription}</div>
          <Link to="/cart">
            <button className="rounded-3xl bg-color-primary px-10 py-3 text-white">
              Buy now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
