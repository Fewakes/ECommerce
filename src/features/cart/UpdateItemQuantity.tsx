import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../Context/CartReducer.jsx";
import Button from "../../ui/Button.js";

interface UpdateItemQuantityProps {
  id: string | number;
  currentQuantity: number;
}

export default function UpdateItemQuantity({
  id,
  currentQuantity,
}: UpdateItemQuantityProps) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span className="text-sm font-medium"> {currentQuantity} </span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}
