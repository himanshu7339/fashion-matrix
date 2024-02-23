import axios from "axios";
import { serverUrl } from "../../store";
import {
  createCategoryFail,
  getAllCategoryFail,
  successCreateCategory,
  successDeleteCategory,
  successGetAllCategory,
  successUpdateCategory,
  tryCreateCategory,
  tryDeleteCategory,
  tryGetAllCategory,
  tryUpdateCategory,
} from "../../features/category/categorySlice";

// Create new Category
export const createCategory = (categoryName) => async (dispatch) => {
  try {
    dispatch(tryCreateCategory());

    const { data } = await axios.post(
      `${serverUrl}/createCategory`,
      {
        categoryName,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(successCreateCategory(data.message));
  } catch (error) {
    dispatch(createCategoryFail(error.response.data.message));
  }
};

// get All categories
export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch(tryGetAllCategory());

    const { data } = await axios.get(`${serverUrl}/categories`, {
      withCredentials: true,
    });
    dispatch(successGetAllCategory(data.categories));
  } catch (error) {
    dispatch(getAllCategoryFail(error.response.data.message));
  }
};

// update category
export const updateCategory =
  (categoryName, categoryId) => async (dispatch) => {
    try {
      dispatch(tryUpdateCategory());

      const { data } = await axios.put(
        `${serverUrl}/updatecategory/${categoryId}`,
        {
          categoryName,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(successUpdateCategory(data.message));
    } catch (error) {
      dispatch(updateCategory(error.response.data.message));
    }
  };

// Delete category
export const deleteCategory = (categoryId) => async (dispatch) => {
  try {
    dispatch(tryDeleteCategory());

    const { data } = await axios.delete(
      `${serverUrl}/updatecategory/${categoryId}`,

      {
        withCredentials: true,
      }
    );
    dispatch(successDeleteCategory(data.message));
  } catch (error) {
    dispatch(deleteCategory(error.response.data.message));
  }
};
