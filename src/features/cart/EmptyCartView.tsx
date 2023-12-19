import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCartView() {
  return (
    <div className="flex h-[40rem] flex-col items-center justify-center">
      <div className="text-center text-3xl">Your Cart is currently empty</div>
      <Link to="/store">
        <button className="mt-10 rounded-3xl bg-color-primary px-6 py-2 text-white">
          Browse Products
        </button>
      </Link>
    </div>
  );
}
