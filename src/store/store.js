import { configureStore } from "@reduxjs/toolkit";
import productslice from "../slice/productslice";

export default configureStore({
  reducer: { productslice },
  devTools: process.env.NODE_ENV !== "production",
});
