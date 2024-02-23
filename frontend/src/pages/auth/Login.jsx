import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearError, clearMessage } from "../../app/features/user/userSlice";
import { toast } from "react-toastify";
import { login } from "../../app/actions/user/userAction";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  const { loading, message, error, isAuthenticate } = useSelector(
    (state) => state.user
  );
 
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (isAuthenticate) {
      navigate("/");
    }
  }, [loading, message, error, dispatch, isAuthenticate, navigate]);
  return (
    <div className="login flex justify-center items-center lg:h-[100vh] lg:justify-start lg:items-start">
      <div className="form-div lg:w-[50%] w-full  m-7 ">
        <div className="heading mb-7 mt-7">
          <h1 className="logo text-5xl lg:text-8xl mb-4 ">Fashion Matrix</h1>
          <h1 className="login-in-to-your text-xl">LOG IN TO YOUR ACCOUNT</h1>
        </div>

        <form
          onSubmit={onSubmitHandler}
          className="login-submit-form flex flex-col mb-7"
        >
          <input
            type="email"
            name="email"
            value={email}
            placeholder="E-MAIL"
            className="border-b-[1px] mb-7 focus:outline-none  "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="PASSWORD"
            className="border-b-[1px] mb-7 focus:outline-none "
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            loading={loading}
            className="bg-red p-3 rounded-none shadow-none hover:shadow-none  mb-7"
          >
            LOG IN
          </Button>
          <Link to={"/forgot-password"}>
            <p className="underline">Have you forgotten your password?</p>
          </Link>
          <Link to={"/register"} className="inline-block">
            <Button className="border border-red bg-white rounded-none text-black p-3 mt-7 w-full hover:shadow-none shadow-none">
              REGISTER NEW ACCOUNT
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
