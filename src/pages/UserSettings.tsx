import React from "react";

export default function UserSettings() {
  return (
    <section>
      <div className="flex justify-center gap-3">
        <img src="/User_alt.png" className="h-[28px] w-[28px]" />
        <p className="text-xl font-bold uppercase ">User Settings</p>
      </div>

      <div className="ml-20 mt-10">
        <div>
          <h2 className="mb-10 text-2xl">User Settings</h2>
        </div>
        <div className="flex max-w-[30rem] flex-col gap-5">
          <div className="flex gap-5">
            <p className="w-[15rem]">Email Address</p>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full rounded-xl border-2 border-color-primary px-6 py-2"
            />
          </div>
          <div className="flex gap-5">
            <p className="w-[15rem]">Full Name</p>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border-2 border-color-primary px-6 py-2"
            />
          </div>

          <div className="w-ful relative mb-10 flex gap-5">
            <p className="w-[9rem]">Image</p>
            <input type="file" id="fileUpload" className="hidden" />
            <label
              htmlFor="fileUpload"
              className=" w-[10rem] cursor-pointer  rounded-3xl bg-color-primary px-6 py-2 text-center  text-white"
            >
              Choose File
            </label>
          </div>
        </div>
        <div>
          <h2 className="mb-10  text-2xl">Change Password</h2>
        </div>
        <div className="flex max-w-[30rem] flex-col gap-5">
          <div className="flex gap-5">
            <p className="w-[15rem]">Password</p>
            <input
              type="text"
              placeholder="Password"
              className="w-full rounded-xl border-2 border-color-primary px-6 py-2"
            />
          </div>
          <div className="flex gap-5">
            <p className="w-[15rem]">Repeat Password</p>
            <input
              type="text"
              placeholder="Repeat Password"
              className="w-full rounded-xl border-2 border-color-primary px-6 py-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
