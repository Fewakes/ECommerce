import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import EmptyCartView from "./EmptyCartView";
import {
  clearCart,
  getCart,
  getTotalCartQuantity,
  getTotalCartPrice,
} from "../../context/CartReducer";
import Button from "../../ui/Button";

export default function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalCartSum = useSelector(getTotalCartPrice);
  if (!cart.length) return <EmptyCartView />;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold">Your Basket ({totalQuantity} Items)</h1>
      <div className="mb-5 flex w-[40rem]   justify-between text-center font-bold">
        <h3>Product Name</h3>
        <div className="flex gap-[10rem]">
          <h3>Quantity</h3>
          <p>Price</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className=" mt-10 w-[40rem] text-right font-bold">
        Total: £{totalCartSum}.00
      </div>
      <div>
        <Button onClick={() => dispatch(clearCart())} type="primary">
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
