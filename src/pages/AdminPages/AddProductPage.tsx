import React from "react";

export default function AddProductPage() {
  return (
    <section>
      <div className="flex justify-center gap-3">
        <img src="/Dell.png" className="h-[28px] w-[28px]" />
        <p className="text-xl font-bold uppercase ">Add Product</p>
      </div>

      <div className="ml-20 mt-10">
        <div>
          <h2 className="mb-10 text-2xl">Add New Product</h2>
        </div>
        <div className="flex max-w-[30rem] flex-col gap-5">
          <div className="flex gap-5">
            <p className="w-[15rem]">Product Name</p>
            <input
              type="text"
              placeholder="Product Name"
              className="w-full rounded-xl border-2 border-color-primary px-6 py-2"
            />
          </div>
          <div className="flex gap-5">
            <p className="w-[15rem]">Product Description</p>
            <input
              type="text"
              placeholder="Product Description"
              className="w-full rounded-xl border-2 border-color-primary px-6 py-2"
            />
          </div>
          <div className="flex gap-5">
            <p className="w-[15rem]">Product Price</p>
            <input
              type="number"
              placeholder="Product Price"
              className="w-full rounded-xl border-2 border-color-primary px-6 py-2"
            />
          </div>
          <div className="relative mb-10 flex w-full gap-5">
            <p className="w-[9rem]">Product Image</p>
            <input type="file" id="productImageUpload" className="hidden" />
            <label
              htmlFor="productImageUpload"
              className=" w-[15rem] cursor-pointer  rounded-3xl bg-color-primary px-5 py-2 text-center  text-white"
            >
              Choose Product Image
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
