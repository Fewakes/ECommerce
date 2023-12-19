import React from "react";

import StoreItems from "../../features/store/StoreItems";

export default function StorePage() {
  return (
    <div className=" m-auto flex items-center justify-center">
      <div className="w-[62rem] justify-center">
        <div className="inline-flex">
          <StoreItems />
        </div>
      </div>
    </div>
  );
}
