/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../context/CartReducer";

function StoreItem({
  id,
  productPhoto,
  productName,
  productPrice,
  productDescription,
  productCollection,
}) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = (e) => {
    if (e.target.id === "modal") {
      setShowModal(false);
    }
  };

  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItem = {
      id,
      productPhoto,
      productName,
      productPrice,
      productDescription,
      productCollection,
      quantity: 1,
      totalPrice: productPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <>
      <div className="mb-10 flex w-[14rem] flex-col items-center gap-3 rounded-md bg-white p-4 shadow-md">
        <img
          src={productPhoto}
          alt="A photo of a product"
          className="h-[12rem] w-[12rem] rounded-md object-cover"
          onClick={() => setShowModal(true)}
        />
        <div className="text-center font-semibold uppercase text-gray-700">
          {productName}
        </div>
        <div className="text-center text-sm font-bold text-gray-500">
          £{productPrice}.00
        </div>
        <button
          className="w-[10rem] rounded-xl bg-color-primary py-2 text-sm text-white transition-colors duration-200 hover:bg-color-primary-dark"
          onClick={handleAddToCart}
        >
          Add to Basket
        </button>
      </div>

      {showModal && (
        <div
          id="modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div className="relative flex h-[25rem] w-[60rem] items-center overflow-hidden rounded-lg bg-white">
            <button
              className="absolute right-0 top-0 m-4"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <div className="flex items-center gap-10">
              <img
                src={`/${productPhoto}`}
                alt="A photo of a product"
                className="w-[25rem]"
              />
              <div className="flex w-[30rem] flex-col gap-10">
                <div className="text-3xl">{productName}</div>
                <div>{productDescription}</div>
                <button
                  className="rounded-3xl bg-color-primary px-10 py-3 text-white"
                  onClick={handleAddToCart}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StoreItem;
