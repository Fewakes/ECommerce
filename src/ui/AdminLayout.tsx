import React from "react";
import { Link, Outlet } from "react-router-dom";

// REMEMBER TO SET CHANGE ON ACTIVE BUTTON

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex w-[18rem] flex-col gap-5 border-r bg-color-primary p-4">
        <Link to="/">
          <img src="/secondarylogo.png" />
        </Link>
        <Link to="/admin/dashboard">
          <button className="flex transform gap-2 transition-transform duration-500 hover:scale-105">
            <img src="/Pipe.png" className="h-[28px] w-[28px]" />
            <p className="text-lg font-bold uppercase text-white">
              Dashboard View
            </p>
          </button>
        </Link>
        <Link to="/admin/addproduct">
          <button className="flex transform gap-2 transition-transform duration-500 hover:scale-105">
            <img src="/Add_ring.png" className="h-[28px] w-[28px]" />
            <p className="text-lg font-bold uppercase  text-white">
              Add Product
            </p>
          </button>
        </Link>
        <Link to="/admin/removeproduct">
          <button className="flex transform gap-2 transition-transform duration-500 hover:scale-105">
            <img src="/Dell.png" className="h-[28px] w-[28px]" />
            <p className="text-lg font-bold uppercase  text-white">
              Remove Product
            </p>
          </button>
        </Link>
        <Link to="/admin/storesettings">
          <button className="flex transform gap-2 transition-transform duration-500 hover:scale-105">
            <img src="/Setting_line.png" className="h-[28px] w-[28px]" />
            <p className="text-lg font-bold uppercase  text-white">
              Store Settings
            </p>
          </button>
        </Link>
        <Link to="/admin/usersettings">
          <button className="flex transform gap-2 transition-transform duration-500 hover:scale-105">
            <img src="/User_alt.png" className="h-[28px] w-[28px]" />
            <p className="text-lg font-bold uppercase  text-white">
              User Settings
            </p>
          </button>
        </Link>
      </div>
      <div className="flex w-full flex-col">
        <header className="bg-color-primary p-4 text-white">
          <h2 className="text-center text-xl uppercase">Admin View</h2>
        </header>
        <main className="overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
