import  { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login flex justify-center items-center lg:h-[100vh] lg:justify-start lg:items-start">
      <div className="form-div lg:w-[50%] w-full  m-7 ">
        <div className="heading mb-7 mt-7">
          <h1 className="logo text-5xl lg:text-8xl mb-4 ">Fashion Matrix</h1>
          <h1 className="login-in-to-your text-xl">LOG IN TO YOUR ACCOUNT</h1>
        </div>

        <form action="" className="login-submit-form flex flex-col mb-7">
          <input
            type="email"
            name="email"
            placeholder="E-MAIL"
            className="border-b-[1px] mb-7 focus:outline-none  "
          />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            className="border-b-[1px] mb-7 focus:outline-none "
          />
          <button className="bg-red p-2 mb-7">LOG IN</button>
          <p>Have you forgotten your password?</p>
          <Link to={"/register"} className="inline-block">
            <button className="border border-red p-2 mt-7 w-full">
              REGISTER NEW ACCOUNT
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;