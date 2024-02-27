import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    // add in cart
    tryCreateShipping: (state) => {
      state.loading = true;
    },

    successCreateShipping: (state, action) => {
      state.loading = false;
      state.shipping = action.payload;
    },

    createShippingFail: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  tryCreateShipping,
  successCreateShipping,
  createShippingFail,
  clearMessage,
  clearError,
} = shippingSlice.actions;

export default shippingSlice.reducer;
