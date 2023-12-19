import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./context/CartReducer";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default store;
