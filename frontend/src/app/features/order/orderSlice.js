import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    // create new category
    tryCreateOrder: (state) => {
      state.loading = true;
    },
    successCreateOrder: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    createOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { tryCreateOrder, successCreateOrder, createOrderFail } =
  orderSlice.actions;

export default orderSlice.reducer;
