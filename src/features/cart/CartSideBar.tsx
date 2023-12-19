import React from "react";
import { getTotalCartPrice } from "../../Context/CartReducer";
import { useSelector } from "react-redux";

export default function CartSideBar() {
  const totalCartSum = useSelector(getTotalCartPrice);
  return (
    <section className="text-center text-white">
      <h2 className="mb-10">
        {" "}
        Please enter your details to proceed with purchase.{" "}
      </h2>
      <div className="flex flex-col gap-5">
        <input
          className="rounded-md border border-gray-300 p-2"
          placeholder="Name on card"
        />
        <input
          className="rounded-md border border-gray-300 p-2"
          placeholder="Card no"
        />
        <div className="flex gap-5">
          <input
            className="w-[7rem] rounded-md border border-gray-300 p-2"
            placeholder="Expiry Date"
          />
          <input
            className="w-[6rem] rounded-md border border-gray-300 p-2"
            placeholder="CVC"
          />
        </div>
        <input
          className="rounded-md border border-gray-300 p-2"
          placeholder="Address"
        />
        <div className="flex gap-5">
          <input
            className="w-[7rem] rounded-md border border-gray-300 p-2"
            placeholder="City"
          />
          <input
            className="w-[6rem] rounded-md border border-gray-300 p-2"
            placeholder="Postcode"
          />
        </div>
      </div>
      <button className="mt-10 rounded-3xl bg-white px-10 py-2 font-bold text-color-primary">
        Pay £{totalCartSum}.00
      </button>
    </section>
  );
}
