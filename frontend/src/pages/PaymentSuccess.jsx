import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import {Link } from "react-router-dom"
const PaymentSuccess = () => {
  return (
    <div className="payment-success min-h-[100vh] flex items-center justify-center">
      <div className="payment-container w-[500px]  h-[500px] flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-center m-4">
          Payment Successfully
        </h1>
        <GoCheckCircleFill className="text-9xl text-center text-green-700" />
       <Link to={"/"}> <button className="bg-red p-2 mt-5 rounded-full text-white">Continuous Shopping</button></Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
