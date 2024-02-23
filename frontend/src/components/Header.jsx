import { PiHandbagFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../app/actions/user/userAction";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"

const Header = ({ isAuthenticate }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cart} = useSelector((state)=> state.cart)
  return (
    <div className="header lg:flex lg:justify-around items-center">
      <div className="logo">
       <Link to={"/"}>
       
       <h1
          style={{ fontFamily: "Cinzel" }}
          className="logo-heading text-center p-4 text-3xl font-semibold lg:text-4xl  "
        >
          {" "}
          Fashion Matrix
        </h1></Link>
      </div>

      {/* input-and-button-div */}

      <div className="input-and-button-div flex justify-between m-2 lg:w-[80%] gap-6 lg:gap-9 ">
        {/* search input */}
        <div className="w-full">
          <input
            style={{ borderColor: " #f1f1f1" }}
            className="placeholder:text-xs p-1 rounded-full  border focus:outline-none  w-full lg:p-3 lg:placeholder:text-sm "
            type="text"
            placeholder="Hey looking for something ? .."
          />
        </div>

        <div className="login-signup-cart-button flex gap-3 lg:gap-6  items-center lg:justify-between">
          <Link to={"/cart"} className="flex gap-2">
            <PiHandbagFill className="text-red text-2xl cursor-pointer" />
            <div className="cart-count ">{cart.length}</div>
          </Link>

          {isAuthenticate ? (
            <FaUser className="text-xl hover:text-red cursor-pointer" />
          ) : (
            <Link to={"/register"}>
              <button className="register-button text-red font-bold bg-gray pr-4 pl-4 pt-2 pb-2 text-xs rounded-full border border-red hover:text-white hover:bg-red transition-all ">
                Register
              </button>
            </Link>
          )}

          {isAuthenticate ? (
            <button
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
              className="register-button text-red font-bold bg-gray pr-4 pl-4 pt-2 pb-2 text-xs rounded-full border border-red hover:text-white hover:bg-red transition-all"
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="register-button text-red font-bold bg-gray pr-4 pl-4 pt-2 pb-2 text-xs rounded-full border border-red hover:text-white hover:bg-red transition-all">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
