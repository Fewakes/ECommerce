import React, { useEffect, useRef, useState } from "react";
import { SlBasket } from "react-icons/sl";
import HeaderCartPreviewLayout from "./HeaderCartPreviewLayout";
import { getTotalCartQuantity } from "../../context/CartReducer";
import { useSelector } from "react-redux";

function HeaderCartPreview() {
  const [basketOpen, setBasketOpen] = useState(false);
  const basketRef = useRef(null);
  const totalQuantity = useSelector(getTotalCartQuantity);

  const toggleBasket = () => {
    setBasketOpen(!basketOpen);
  };

  const handleClickOutside = (event) => {
    if (basketRef.current && !basketRef.current.contains(event.target)) {
      setBasketOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" onClick={toggleBasket}>
      <SlBasket size={32} color="white" />
      {basketOpen && (
        <div ref={basketRef}>
          <HeaderCartPreviewLayout />
        </div>
      )}
      <div className="absolute right-[-1rem] top-[1rem] flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-3xl bg-black text-white opacity-50">
        {totalQuantity}
      </div>
    </div>
  );
}

export default HeaderCartPreview;
