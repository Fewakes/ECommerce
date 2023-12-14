import React from "react";

interface Item {
  name: string;
  quantity: number;
  price: number;
}

interface BasketViewProps {
  items: Item[];
}

const BasketView: React.FC<BasketViewProps> = ({ items }) => {
  return (
    <div className="absolute right-0 z-10 mt-8 w-64 overflow-hidden rounded-md bg-white p-4 shadow-xl">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="mb-4 flex items-center justify-between">
            <div>
              <div className="font-bold text-black">{item.name}</div>
              <div className="text-black">Quantity: {item.quantity}</div>
            </div>
            <div className="text-right text-black">
              <div className="font-bold text-black">
                ${item.price.toFixed(2)}
              </div>
              <div className="text-black">
                Total: ${(item.quantity * item.price).toFixed(2)}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-700">Your basket is empty</div>
      )}
    </div>
  );
};

export default BasketView;
