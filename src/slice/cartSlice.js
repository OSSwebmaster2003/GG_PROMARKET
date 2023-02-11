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
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
