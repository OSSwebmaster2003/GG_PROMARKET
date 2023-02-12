import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  wishlist: [],
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
    addToWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    deleteWishlistElement: (state, action) => {
      const index = state.wishlist.findIndex(
        (item) => item.id === action.payload
      );
      state.wishlist.splice(index, 1);
    },
  },
});

export const {
  addToCart,
  inrementQuantity,
  decrementQuantity,
  deleteCartElement,
  addToWishlist,
  deleteWishlistElement,
} = cartSlice.actions;
export default cartSlice.reducer;
