import React, { useState, useRef, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import { MdKeyboardArrowDown } from "react-icons/md";
import BasketView from "./BasketView";
import ReactiveComponent from "./ReactiveComponent";

interface BasketItem {
  name: string;
}

export default function AppLayouts() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);
  const dropdownRef = useRef(null);
  const basketRef = useRef(null);

  const [basketItems] = useState<BasketItem[]>([
    { name: "Item 1", quantity: 2, price: 10.99 },
    { name: "Item 2", quantity: 1, price: 20.99 },
  ]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleBasket = () => {
    setBasketOpen(!basketOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
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
    // SIDEBAR
    <div className="flex h-screen bg-gray-200">
      <div className="flex w-[18rem] flex-col gap-5 border-r bg-color-primary p-4">
        <Link to="/">
          <img src="/secondarylogo.png" />
        </Link>
        <ReactiveComponent />
      </div>
      <div className="flex w-full flex-col">
        {/* HEADER */}
        <header className=" flex items-center justify-between bg-color-primary p-4">
          <div className="flex-1 text-center">
            <input
              placeholder="search..."
              className="h-[2.5rem] w-[30rem] rounded-3xl pl-5 shadow-custom transition-transform focus:scale-105 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-10">
            <Link to="/admin/login">
              <RiAdminLine size={32} color="white" />
            </Link>
            <div className="relative" onClick={toggleBasket}>
              <SlBasket size={32} color="white" />
              {basketOpen && (
                <div ref={basketRef}>
                  <BasketView items={basketItems} />
                </div>
              )}
            </div>
            <div className="relative flex items-center" ref={dropdownRef}>
              <img
                src="/profile-pic.png"
                alt="Profile Picture"
                className="h-[50px] w-[50px] rounded-full"
              />

              <MdKeyboardArrowDown
                size={28}
                color="white"
                onClick={toggleDropdown}
                style={{
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              {dropdownOpen && (
                <div className="absolute right-0 z-10  mt-[12rem] w-48 overflow-hidden rounded-md bg-white shadow-xl">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-color-primary hover:text-white"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-color-primary hover:text-white"
                  >
                    Settings
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-color-primary hover:text-white"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className=" overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
