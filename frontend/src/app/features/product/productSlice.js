import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // get all product
    tryGetAllProducts: (state) => {
      state.loading = true;
    },
    successGetAllProducts: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getAllProductsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // create product
    tryCreateProduct: (state) => {
      state.loading = true;
    },
    successCreateProduct: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get product by id
    tryGetProductById: (state) => {
      state.loading = true;
    },
    successGetProductById: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    getProductByIdFail: (state, action) => {
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

export const {
  tryGetAllProducts,
  successGetAllProducts,
  getAllProductsFail,
  clearMessage,
  tryCreateProduct,
  successCreateProduct,
  createProductFail,
  tryGetProductById,
  successGetProductById,
  getProductByIdFail,
  clearError,
} = productSlice.actions;

export default productSlice.reducer;
