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
        const productIdToRemove = action.payload;
      
        // Filter out the item with the specified productId
        state.cart = state.cart.filter(item => item._id !== productIdToRemove);
        
        localStorage.setItem('cart', JSON.stringify(state.cart));
        // Update loading status
        state.loading = false;
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
