import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <section className="align-center flex h-[50rem] flex-col items-center justify-center gap-5">
      <h1>Admin Login</h1>
      <div className="flex">
        <p className="w-[10rem]">User Login</p>
        <input
          type="text"
          className="rounded-3xl border border-solid border-black"
        />
      </div>
      <div className="flex">
        <p className="w-[10rem]">User Password</p>
        <input
          type="text"
          className="rounded-3xl border border-solid border-black"
        />
      </div>
      <Link to="/admin/dashboard">
        <button className="mt-10 rounded-3xl bg-color-primary px-10 py-2 text-white">
          Login
        </button>
      </Link>
      <Link to="/">
        <button>back</button>
      </Link>
    </section>
  );
}
