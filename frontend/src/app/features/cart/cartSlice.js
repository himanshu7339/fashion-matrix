import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add in cart
    addCart: (state, action) => {
      state.loading = true;

      let itemFound = false;

      state.cart.forEach((item) => {
        if (item._id === action.payload._id) {
          item.productQty += 1;
          itemFound = true;
        }
      });

      if (!itemFound) {
        state.cart.push(action.payload);
      }

      state.loading = false;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeCart: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },

    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { removeCart, addCart } = cartSlice.actions;

export default cartSlice.reducer;
