import { PiHandbagFill } from "react-icons/pi";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header lg:flex lg:justify-around items-center">
      <div className="logo">
        <h1
          style={{ fontFamily: "Cinzel" }}
          className="logo-heading text-center p-4 text-3xl font-semibold lg:text-4xl  "
        >
          {" "}
          Fashion Matrix
        </h1>
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
          <Link to={"/cart"}><PiHandbagFill className="text-red text-2xl cursor-pointer" /></Link>
          <Link to={"/register"}>
            <button className="register-button text-red font-bold bg-gray pr-4 pl-4 pt-2 pb-2 text-xs rounded-full border border-red hover:text-white hover:bg-red transition-all ">
              Register
            </button>
          </Link>
          <Link to={"/login"}>
            <button className="register-button text-red font-bold bg-gray pr-4 pl-4 pt-2 pb-2 text-xs rounded-full border border-red hover:text-white hover:bg-red transition-all">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
