import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { truncateText } from "../utils/function";

const Cart = ({ setProgressBar }) => {
  const { cart, loading } = useSelector((state) => state.cart);

  useEffect(() => {
    setProgressBar(50);

    setTimeout(() => {
      setProgressBar(100);
    }, 200);
  }, [setProgressBar]);

  return (
    <div className="cart h-[100vh]  ">
      <div className="main-content grid grid-cols-2  ">
        <div className="col-1 p-4">
          {/* information */}

          <div className="information-div ">
            <h1 className="text-semibold text-2xl mb-7">
              SHIPPING INFORMATION
            </h1>
            {/* form  */}
            <form action="" className="login-submit-form flex flex-col mb-7">
              <input
                type="name"
                name="name"
                required
                placeholder="NAME"
                className="border-b-[1px] mb-7 focus:outline-none  "
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
                  />
                </div>
              </div>

              <input
                type="name"
                name="city"
                required
                placeholder="CITY"
                className="border-b-[1px] mb-7 focus:outline-none  "
              />
              <input
                type="text"
                name="address"
                required
                placeholder="ADDRESS"
                className="border-b-[1px] mb-7 focus:outline-none  "
              />
              <input
                type="number"
                name="postcode"
                required
                placeholder="POSTCODE"
                min="0"
                onInput="this.value = Math.abs(this.value)"
                className="remove-arrow border-b-[1px] mb-7 focus:outline-none  "
              />
            </form>

            <div className="submit-button flex justify-between items-center">
              <Link to={"/"}>
                <h1 className="underline">BACK TO SHOPPING</h1>
              </Link>

              <button className="bg-red p-2">CONTINUE</button>
            </div>
          </div>
        </div>

        <div className="col-2 p-4 cart-product-list">
          {/* cart product */}
          {cart &&
            cart.map((item, index) => (
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
                <h1 className="product-name max-w-[16rem]">{truncateText(item.productName, 7)}</h1>
                <p>₹ {item.productPrice}</p>
                <p>{item.productQty}</p>
                <MdDelete className="text-2xl hover:text-red cursor-pointer duration-300" />
              </div>
            ))}

          <div className="design-line  border mt-7"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
