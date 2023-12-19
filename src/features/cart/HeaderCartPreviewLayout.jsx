import React, { useMemo } from "react";
import HeaderCartPreviewItem from "./HeaderCartPreviewItem";
import { useSelector } from "react-redux";
import { getCart } from "../../context/CartReducer";
import { Link } from "react-router-dom";

import { getTotalCartPrice } from "../../context/CartReducer";
import Button from "../../ui/Button";

export default function HeaderCartPreviewLayout() {
  const cart = useSelector(getCart);
  const memoizedCart = useMemo(() => cart, [cart]);
  const totalCartSum = useSelector(getTotalCartPrice);

  return (
    <>
      <div className="absolute right-0 z-10 mt-8 flex w-64 flex-col overflow-hidden rounded-md bg-white p-4 shadow-xl">
        {memoizedCart.map((item) => (
          <HeaderCartPreviewItem item={item} key={item.id} />
        ))}

        <div className="pb-5 text-right font-bold">
          Total: £{totalCartSum}.00
        </div>
        <div className="flex justify-center">
          <Link to="/cart">
            <Button type="primary">Go to cart</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
