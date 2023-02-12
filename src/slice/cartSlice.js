import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
    inrementQuantity: (state, action) => {
      state.cart[action.payload].quantity++;
    },
    decrementQuantity: (state, action) => {
      state.cart[action.payload].quantity--;
    },
    deleteCartElement: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      state.cart.splice(index, 1);
    },
  },
});

export const {
  addToCart,
  inrementQuantity,
  decrementQuantity,
  deleteCartElement,
} = cartSlice.actions;
export default cartSlice.reducer;
