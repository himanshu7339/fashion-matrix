import {
  createProductFail,
  getAllProductsFail,
  getProductByIdFail,
  successCreateProduct,
  successGetAllProducts,
  successGetProductById,
  tryCreateProduct,
  tryGetAllProducts,
  tryGetProductById,
} from "../../features/product/productSlice";
import axios from "axios";
import { serverUrl } from "../../store";

// get All Products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch(tryGetAllProducts());

    const { data } = await axios.get(`${serverUrl}/products`, {
      withCredentials: true,
    });
    dispatch(successGetAllProducts(data.products));
  } catch (error) {
    dispatch(getAllProductsFail(error.response.data.message));
  }
};

// get Product By Id

export const getProductById = (productId) => async (dispatch) => {
  try {
    dispatch(tryGetProductById());

    const { data } = await axios.get(
      `${serverUrl}/product/${productId}`,

      {
        withCredentials: true,
      }
    );
    dispatch(successGetProductById(data.product));
  } catch (error) {
    dispatch(getProductByIdFail(error.response.data.message));
  }
};



// Create new product
export const createProduct = (formData) => async (dispatch) => {
  console.log([...formData.entries()])
  try {
    dispatch(tryCreateProduct());

    const { data } = await axios.post(
      `${serverUrl}/createproduct`,
      formData,  // Corrected: Directly pass the FormData object
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for FormData
        },
      }
    );

    dispatch(successCreateProduct(data.message));
  } catch (error) {
    dispatch(createProductFail(error.response.data.message));
  }
};