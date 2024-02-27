import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import productSlice from "./features/product/productSlice";
import categorySlice from "./features/category/categorySlice";
import cartSlice from "./features/cart/cartSlice";
import shippingSlice from "./features/shipping/shippingSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    category: categorySlice,
    cart: cartSlice,
    shipping: shippingSlice,
  },
});

export const serverUrl = "http://localhost:3000/api/v1";
