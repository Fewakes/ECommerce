import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../data/data.js";
import Heading from "../features/store/Heading.js";

export default function Product() {
  const { id } = useParams();
  const productId = Number(id);
  const product = items.find((item: { id: number }) => item.id === productId);

  return (
    <div className=" mx-auto flex w-full max-w-screen-xl flex-col  md:p-5 lg:p-8">
      <Heading />
      <section className=" flex h-[85.6vh] flex-grow flex-row items-center justify-center gap-[5rem]">
        <img
          src={`/${product.productPhoto}`}
          alt="A photo of a product"
          className="h-[25rem] w-[28rem] rounded-md "
        />

        <div className="flex max-w-[25rem] flex-col gap-10">
          <div className="text-center text-4xl font-bold uppercase">
            {product.productName}
          </div>
          <div className="text-center">{product.productDescription}</div>
          <div className="flex justify-center">
            <button className="rounded-lg bg-color-primary px-5 py-2 text-lg text-white">
              Buy now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
