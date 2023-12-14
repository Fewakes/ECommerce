import React, { useState } from "react";

export default function GridComponent() {
  const [active, setActive] = useState<boolean>(false);

  function clickHandler() {
    setActive((prevActive) => !prevActive);
  }

  function Checkout() {
    return (
      <div className="absolute inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-[3px]">
        <div className="absolute left-1/2 top-1/2 flex h-[40rem]  w-[30rem] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-10 rounded-3xl bg-white text-color-primary">
          <h1 className="mt-10">Checkout</h1>
          <div className="flex ">
            <p className="w-[7rem]">Card No</p>
            <input
              type="text"
              className="rounded-3xl border border-solid border-black"
            />
          </div>

          <div className="flex ">
            <p className="w-[7rem]">Expiry Date</p>
            <input
              type="text"
              className="rounded-3xl border border-solid border-black"
            />
          </div>

          <div className="flex ">
            <p className="w-[7rem]">CVC</p>
            <input
              type="text"
              className="rounded-3xl border border-solid border-black"
            />
          </div>
          <button className="mt-10 rounded-3xl bg-color-primary px-10 py-2 text-white">
            Pay
          </button>
          <button onClick={clickHandler}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="center relative m-auto mt-[5rem] grid max-w-[120rem] grid-rows-4 items-center justify-items-center gap-4">
        <div className="col-span-full row-span-1 text-xl font-bold">
          Your Cart (4 Items)
        </div>
        <div className="row-span-1 row-start-2 grid min-w-[50rem]  grid-cols-[4fr,1fr,1fr,1fr] items-center justify-start gap-4">
          <div className="ml-5 font-bold">Item</div>
          <div className="font-bold">Price</div>
          <div className="font-bold">Quantity</div>
          <div className="font-bold">Total</div>
        </div>
        {/* Product 1 */}
        <div className="row-span-1 row-start-3 grid min-w-[50rem] grid-cols-[4fr,1fr,1fr,1fr] items-center justify-start gap-4">
          <div className="flex items-center justify-start ">
            <img
              src="product-1.png"
              alt="A photo of our shop"
              className="h-[5rem] w-[5rem] rounded-md "
            />
            <p>The Leisure</p>
          </div>
          <div>350.00</div>
          <div>2</div>
          <div>700.00</div>
        </div>
        {/* PRODUCT 2*/}
        <div className="row-span-1 row-start-4 grid min-w-[50rem]  grid-cols-[4fr,1fr,1fr,1fr] items-center justify-start gap-4">
          <div className="flex items-center justify-start">
            <img
              src="product-1.png"
              alt="A photo of our shop"
              className="h-[5rem] w-[5rem] rounded-md "
            />
            <p>The Leisure</p>
          </div>
          <div>350.00</div>
          <div>2</div>
          <div> 700.00</div>
        </div>
        <button
          className="rounded-3xl bg-color-primary px-10 py-2 text-white"
          onClick={clickHandler}
        >
          BUY
        </button>
      </div>

      <section className=" mt-20 flex justify-center gap-[3rem] pb-10 pt-[1.7rem]">
        {/* 1 featured */}
        <div className="flex max-w-[35rem] items-center justify-center gap-5 rounded-md bg-color-primary px-3 py-3">
          <img
            src="product-1.png"
            alt="A photo of our shop"
            className="h-[10rem] w-[10rem] rounded-md"
          />
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-xl text-white">The Leisure</h2>
            <p className="mb-4 max-w-[18rem] text-center text-white">
              A chair like no others, sit once and you will fall in love. What
              you are waiting for. Bag it now and show off to your friends!
            </p>
            <button className=" rounded-3xl bg-white px-10 py-2 font-bold text-color-primary">
              BAG IT !
            </button>
          </div>
        </div>
        {/*  2 featured */}
        <div className="flex max-w-[35rem] items-center justify-center gap-5 rounded-md bg-color-primary px-3 py-3">
          <img
            src="product-1.png"
            alt="A photo of our shop"
            className="h-[10rem] w-[10rem] rounded-md"
          />
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-xl text-white">The Leisure</h2>
            <p className=" mb-4  max-w-[18rem] text-center text-white">
              A chair like no others, sit once and you will fall in love. What
              you are waiting for. Bag it now and show off to your friends!
            </p>
            <button className=" rounded-3xl bg-white px-10 py-2 font-bold text-color-primary">
              BAG IT !
            </button>
          </div>
        </div>
        {/*  3 featured*/}
        <div className="flex max-w-[35rem] items-center justify-center gap-5 rounded-md bg-color-primary px-3 py-3">
          <img
            src="product-1.png"
            alt="A photo of our shop"
            className="h-[10rem] w-[10rem] rounded-md"
          />
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-xl text-white">The Leisure</h2>
            <p className="mb-4  max-w-[18rem] text-center text-white">
              A chair like no others, sit once and you will fall in love. What
              you are waiting for. Bag it now and show off to your friends!
            </p>
            <button className=" rounded-3xl bg-white px-10 py-2 font-bold text-color-primary">
              BAG IT !
            </button>
          </div>
        </div>
      </section>
      {active ? <Checkout /> : ""}
    </>
  );
}
