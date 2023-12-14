import React from "react";

export default function StoreSettings() {
  return (
    <section>
      <div className="flex justify-center gap-3">
        <img src="/Setting_line.png" className="h-[28px] w-[28px]" />
        <p className="text-xl font-bold uppercase ">Store Settings</p>
      </div>

      <div className="ml-20 mt-10">
        <div>
          <h2 className="mb-10 text-2xl">Store Settings</h2>
        </div>
        <div className="flex max-w-[30rem] flex-col gap-5">
          <div className="flex gap-5">
            <p className="w-[15rem]">Store Name</p>
            <input
              type="text"
              placeholder="Store Name"
              className="w-full rounded-xl border-2 border-color-primary px-6 py-2"
            />
          </div>
          <div className="flex gap-5">
            <p className="w-[15rem]">Store Address</p>
            <input
              type="text"
              placeholder="Store Address"
              className="w-full rounded-xl border-2 border-color-primary px-6 py-2"
            />
          </div>

          <div className="relative mb-10 flex w-full gap-5">
            <p className="w-[10rem]">Store Image</p>
            <input type="file" id="storeImageUpload" className="hidden" />
            <label
              htmlFor="fileUpload"
              className=" w-[13rem] cursor-pointer  rounded-3xl bg-color-primary px-6 py-2 text-center  text-white"
            >
              Choose Store Image
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
