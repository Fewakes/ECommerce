/* eslint-disable react/prop-types */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  // cart: [
  //   {
  //     id: 12,
  //     productName: 'The Original',
  //     quantity: 2,
  //     productPrice: 320.00,
  //     totalPrice: 640.00,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // Check if the item already exists in the cart
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        // If the item exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    // payload = id
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    // add action
    clearCart(state) {
      state.cart = [];
    },
  },
});

// Export the action creators from the cart slice
export const {
  addItem, // Adds a new item to the cart
  deleteItem, // Removes an item from the cart by its Id
  increaseItemQuantity, // Increases the quantity of an item in the cart by 1
  decreaseItemQuantity, // Decreases the quantity of an item in the cart by 1
  clearCart, // Removes all items from the cart
} = cartSlice.actions;

// Export the reducer function for the cart slice
export default cartSlice.reducer;

// Export additional selectors for getting data from the cart slice
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0); // Returns the total quantity of items in the cart

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0,
  );
}; // Returns the total price of items in the cart

// Returns the quantity of a specific item in the cart by itsId
export const getCurrentQuantityById = (state, id) => {
  const item = state.cart.cart.find((item) => item.id === id);
  return item ? item.quantity : 0;
};

export const getCart = (state) => state.cart.cart;
