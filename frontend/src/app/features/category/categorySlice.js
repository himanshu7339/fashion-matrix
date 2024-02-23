import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // create new category
    tryCreateCategory: (state) => {
      state.loading = true;
    },
    successCreateCategory: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createCategoryFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // get all categories
    tryGetAllCategory: (state) => {
      state.loading = true;
    },
    successGetAllCategory: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    getAllCategoryFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // update category
    tryUpdateCategory: (state) => {
      state.loading = true;
    },
    successUpdateCategory: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    getUpdateCategoryFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete category
    tryDeleteCategory: (state) => {
        state.loading = true;
      },
      successDeleteCategory: (state, action) => {
        state.loading = false;
        state.message = action.payload;
      },
      deleteCategoryFail: (state, action) => {
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
    tryDeleteCategory,
    successDeleteCategory,
    deleteCategoryFail,
  tryGetAllCategory,
  successGetAllCategory,
  getAllCategoryFail,
  clearMessage,
  clearError,
  tryCreateCategory,
  successCreateCategory,
  createCategoryFail,
  successUpdateCategory,
  tryUpdateCategory,
  getUpdateCategoryFail
} = categorySlice.actions;

export default categorySlice.reducer;
