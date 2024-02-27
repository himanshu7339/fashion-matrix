import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";

import {
  calculateCartTotal,
  formatPriceWithCommas,
  truncateText,
} from "../utils/function";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../app/features/cart/cartSlice";
import { createShipping } from "../app/actions/shipping/shippingAction";
import axios from "axios";
import { serverUrl } from "../app/store";
import razorpayLogo from "../assets/images/Fashion-Matrix.png";

import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripe = await loadStripe(
  "pk_test_51KjNf2SDllj7UlZwMOSehZ8xJLOPMWTDwhI3RoFuzSVYq4qiLt3NzSbhb97DC28k788hs3mL03zLsVU2uljqzQ68009CpFOxeK"
);
const Cart = ({ setProgressBar }) => {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const subtotalPrice = calculateCartTotal(cart);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const shippingCharge = subtotalPrice > 500 ? 0 : 99;
  const grandTotal = subtotalPrice + shippingCharge;

  const createPaymentSession = async () => {
    try {
      const { data } = await axios.post(
        `${serverUrl}/create-checkout-session`,
        {
          cart,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await stripe.redirectToCheckout({
        sessionId: data.id,
      });
      console.log(result);
      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  // use Effect
  useEffect(() => {
    setProgressBar(50);
    setTimeout(() => {
      setProgressBar(100);
    }, 200);
  }, [setProgressBar]);

  // remove from cart handler
  const removeFromCartHandler = (productId) => {
    dispatch(removeCart(productId));
  };

  // onsubmit handler form
  const payNowHandler = (e, name, city, address, postcode, phoneNumber) => {
    e.preventDefault();
    dispatch(createShipping(name, city, address, postcode, phoneNumber));
    createPaymentSession();
  };

  return (
    <div className="cart h-[100vh] overflow-y-auto :  ">
      <div className="main-content grid grid-col-1 lg:grid-cols-2 flex-row-reverse   ">
        <div className="col-1 p-4">
          {/* information */}

          <div className="information-div ">
            <h1 className="text-semibold text-2xl mb-7">
              SHIPPING INFORMATION
            </h1>
            {/* form  */}
            <form
              onSubmit={(e) =>
                payNowHandler(e, name, city, address, postcode, phoneNumber)
              }
              className="login-submit-form flex flex-col mb-7"
            >
              <input
                type="name"
                name="name"
                required
                placeholder="NAME"
                className="border-b-[1px] mb-7 focus:outline-none  "
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                name="country"
                value={"INDIA"}
                required
                className="border-b-[1px] mb-7 focus:outline-none "
              />

              {/* phone number */}
              <div className="flex items-center w-full mb-7">
                <div className="mr-2">
                  <span className="text-lg font-bold">+91</span>
                </div>
                <div className="w-full">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border-b-[1px] focus:outline-none w-[100%] "
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <input
                type="text"
                name="city"
                required
                placeholder="CITY"
                className="border-b-[1px] mb-7 focus:outline-none  "
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                name="address"
                required
                placeholder="ADDRESS"
                className="border-b-[1px] mb-7 focus:outline-none  "
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="number"
                name="postcode"
                required
                placeholder="POSTCODE"
                min="0"
                onInput="this.value = Math.abs(this.value)"
                className="remove-arrow border-b-[1px] mb-7 focus:outline-none  "
                onChange={(e) => setPostcode(e.target.value)}
              />

              <div className="submit-button flex justify-between items-center">
                <Link to={"/"}>
                  <h1 className="underline">BACK TO SHOPPING</h1>
                </Link>

                <button className="bg-red p-2 rounded-full">Checkout</button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-2 p-4 cart-product-list overflow-y-auto">
          {/* cart product */}
          {cart &&
            cart.map((item) => (
              <div
                key={item._id}
                className="cart-product flex justify-between mb-7 mt-7 items-center"
              >
                <div className="image-cart-product border p-1">
                  <img
                    width={70}
                    src={item.productImage}
                    alt={item.productName}
                  />
                </div>
                <h1 className="product-name max-w-[16rem] text-sm lg:text-xl">
                  {truncateText(item.productName, 7)}
                </h1>

                <div
                  className="product-image-with-color border   p-2 rounded-full cursor-pointer"
                  style={{ background: item.selectedColor }}
                >
                  <p className="text-white text-[10px] ">{item.selectedSize}</p>
                </div>

                <p className="text-sm lg:text-xl">
                  ₹ {formatPriceWithCommas(item.productPrice * item.productQty)}
                </p>
                <p className="text-sm lg:text-xl">{item.productQty}</p>
                <MdDelete
                  onClick={() => removeFromCartHandler(item._id)}
                  className="text-xl hover:text-red cursor-pointer duration-300  lg:text-2xl"
                />
              </div>
            ))}

          {cart.length === 0 ? (
            <h1 className="text-center text-sm lg:text-xl">Cart is empty</h1>
          ) : (
            <>
              <div className="design-line  border mt-7 text-sm lg:text-xl"></div>

              {/* sub total div */}
              <div className="subtotal-div flex justify-between mt-4 text-sm lg:text-xl">
                <p>Subtotal:</p>
                <p className="font-bold">₹ {subtotalPrice}</p>
              </div>

              {/* shipping price div */}
              <div className="subtotal-div flex justify-between mt-4 text-sm lg:text-xl">
                <p>Shipping:</p>
                <p className="font-bold">₹ {shippingCharge}</p>
              </div>

              {/* total price */}
              <div className="subtotal-div flex justify-between mt-4 text-sm lg:text-xl">
                <p>Grand total:</p>
                <p className="font-bold">₹ {grandTotal}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
