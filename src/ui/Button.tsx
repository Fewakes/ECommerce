import React from "react";

type ButtonType = "primary" | "secondary" | "round";

interface ButtonProps {
  children: string;
  type: ButtonType;
  onClick: () => void;
}

export default function Button({ children, type, onClick }: ButtonProps) {
  let className = "";

  switch (type) {
    case "primary":
      className =
        "bg-color-primary hover:bg-color-primary-dark text-white  py-2 px-7 rounded-3xl";
      break;
    case "secondary":
      className =
        "bg-white hover:bg-gray-200 text-color-primary  py-2 px-7 rounded-3xl font-bold";
      break;
    case "round":
      className =
        "bg-color-primary hover:bg-color-primary-dark text-white w-8 h-8 flex items-center justify-center rounded-full";
      break;
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
