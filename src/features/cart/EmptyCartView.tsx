import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

export default function EmptyCartView() {
  return (
    <div className="flex h-[40rem] flex-col items-center justify-center">
      <div className="mb-10 text-center text-3xl">
        Your Cart is currently empty
      </div>
      <Link to="/store">
        <Button type="primary">Browse Products</Button>
      </Link>
    </div>
  );
}
