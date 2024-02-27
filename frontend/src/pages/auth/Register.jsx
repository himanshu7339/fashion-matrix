import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../app/actions/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearError, clearMessage } from "../../app/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const Register = ({setProgressBar}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, message, error, isAuthenticate } = useSelector(
    (state) => state.user
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  useEffect(() => {
    setProgressBar(50);
    setTimeout(() => {
      setProgressBar(100);
    }, 200);
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
    <div className="register flex justify-center items-center lg:h-[100vh] lg:justify-start lg:items-start">
      <div className="form-div lg:w-[50%] w-full  m-7 ">
        <div className="heading mb-7 mt-7">
          <h1 className="logo text-5xl lg:text-8xl mb-4 ">Fashion Matrix</h1>
          <h1 className="login-in-to-your text-xl">PERSONAL DETAILS</h1>
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
            className="border-b-[1px] mb-7 focus:outline-none "
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
          <input
            type="text"
            value={name}
            name="name"
            placeholder="NAME"
            className="border-b-[1px] mb-7 focus:outline-none "
            onChange={(e) => setName(e.target.value)}
          />
          <Button className="border border-red bg-red rounded-none text-white p-3 mt-7 w-full hover:shadow-none shadow-none">CREATE ACCOUNT</Button>
          <p className="mt-4">If you have already account?</p>
          <Link to={"/login"} className="inline-block">
            <Button className="border border-red bg-white rounded-none text-black p-3 mt-7 w-full hover:shadow-none shadow-none">LOGIN</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
