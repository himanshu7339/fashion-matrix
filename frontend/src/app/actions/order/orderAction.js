import { createOrderFail, successCreateOrder, tryCreateOrder } from "../../features/order/orderSlice";
import { serverUrl } from "../../store";
import axios from "axios";
// Create new Category
export const createOrder= (cart,shipping,subtotalPrice) => async (dispatch) => {
    try {
      dispatch(tryCreateOrder());
  
      const { data } = await axios.post(
        `${serverUrl}/createorder`,
        {
            products: cart,
            shippingAddress: shipping._id,
            totalAmount: subtotalPrice,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
  
      dispatch(successCreateOrder(data.message));
    } catch (error) {
      dispatch(createOrderFail(error.response.data.message));
    }
  };