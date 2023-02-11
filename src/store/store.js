import { configureStore } from "@reduxjs/toolkit";
import productslice from "../slice/productslice";
import cartSlice from "../slice/cartSlice";

export default configureStore({
  reducer: { productslice, cartSlice },
  devTools: process.env.NODE_ENV !== "production",
});
