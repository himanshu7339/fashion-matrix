import axios from "axios";
import {
  createShippingFail,
  successCreateShipping,
  tryCreateShipping,
} from "../../features/shipping/shippingSlice";
import { serverUrl } from "../../store";

// create shipping action
export const createShipping =
  (name, city, address, postcode, phoneNumber) => async (dispatch) => {
    try {
      dispatch(tryCreateShipping());

      const { data } = await axios.post(
        `${serverUrl}/createshipping`,
        {
          name,
          city,
          address,
          postcode,
          phoneNumber,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch(successCreateShipping(data.shipping));
    } catch (error) {
      dispatch(createShippingFail(error.response.data.message));
    }
  };
