import React from "react";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../../Context/CartReducer";

interface Item {
  id: string;
  productName: string;
  productPrice: number;
}

interface BasketPreviewItemProps {
  item: Item;
}

const HeaderCartPreviewItem: React.FC<BasketPreviewItemProps> = ({ item }) => {
  const { id, productName, productPrice } = item;
  const currentQuantity = useSelector((state) =>
    getCurrentQuantityById(state, id),
  );

  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <div className="font-bold text-black">{productName}</div>
        <div className="text-black">Quantity: {currentQuantity}</div>
      </div>
      <div className="text-right text-black">
        <div className="font-bold text-black">Price</div>
        <div className="text-black">£{currentQuantity * productPrice}</div>
      </div>
    </div>
  );
};

export default HeaderCartPreviewItem;
