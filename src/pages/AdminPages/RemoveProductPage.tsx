import React from "react";

export default function RemoveProductPage() {
  return (
    <section>
      <div className="flex justify-center gap-3">
        <img src="/Dell.png" className="h-[28px] w-[28px]" />
        <p className="text-xl font-bold uppercase ">Remove Product</p>
      </div>

      <div className="ml-20 mt-10">
        <div>
          <h2 className="mb-10 text-2xl">Select Product to remove</h2>
        </div>
        <div className="flex max-w-[30rem] flex-col gap-5">
          <div className="flex gap-5">
            <p className="w-[15rem]">Product</p>
            <select
              className="w-full rounded-xl border-2 border-color-primary px-6 py-2"
              placeholder="remove product"
            >
              <option>The Slider</option>
              <option>The Crouch</option>
              <option>The Sitter</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
