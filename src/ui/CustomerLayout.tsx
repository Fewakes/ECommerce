import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import StoreSideBar from "../features/store/StoreSideBar";
import CartSideBar from "../features/cart/CartSideBar";
import HeaderCartPreview from "../features/cart/HeaderCartPreview";
import UserDropdown from "../features/user/UserDropdown";

export default function CustomerLayout() {
  const location = useLocation();
  return (
    // SIDEBAR
    <div className="flex h-screen bg-gray-200">
      <div className="flex w-[18rem] flex-col gap-5 border-r bg-color-primary p-4">
        <Link to="/">
          <img src="/secondarylogo.png" />
        </Link>
        <>
          {location.pathname === "/store" && <StoreSideBar />}
          {location.pathname === "/cart" && <CartSideBar />}
        </>
      </div>

      {/* HEADER */}
      <div className="flex w-full flex-col">
        <header className=" flex items-center justify-between bg-color-primary p-4">
          <div className="flex-1 text-center">
            <input
              placeholder="search..."
              className="h-[2.5rem] w-[30rem] rounded-3xl pl-5 shadow-custom transition-transform focus:scale-105 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-10">
            <HeaderCartPreview />
            <UserDropdown />
          </div>
        </header>

        <main className=" overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
