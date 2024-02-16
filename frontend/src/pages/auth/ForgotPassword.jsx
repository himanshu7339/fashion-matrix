import React from "react";

const ForgotPassword = () => {
  return (
    <div className="forgot-password flex justify-center h-[100vh]">
      <div className="content-div mt-16">

      <div className="heading flex flex-col items-center gap-3">
        <h1 className="heading text-4xl">Forgot password?</h1>
        <p className="text-sm ">
          Please enter the email address your used to create your account , and
          we'll send you a link to reset your password
        </p>
      </div>

      <div className="input-for-email mt-6 block">
        <p>Email</p>
        <form action="">



        <input type="text" placeholder="E-Mail" className="border border-[black] w-full p-3 mt-3" />
        <button className="bg-red pt-3 pb-3 pr-6 pl-6 mt-6 text-semibold">Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
