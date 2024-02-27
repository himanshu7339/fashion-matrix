import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { serverUrl } from "../app/store";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const {
        data: { client_secret },
      } = await axios.post(`${serverUrl}/payment`, {
        amount: 500,
      });

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(PaymentElement),
        },
      });

      if (result.error) {
        setErrorMessage(result.error.message);
      } else {
        // Payment successful
        console.log(result.paymentIntent);
      }
    } catch (error) {
      console.error("Error creating order or confirming payment:", error);
      setErrorMessage("Error processing payment");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe}>Submit</button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default CheckoutForm;
