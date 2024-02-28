import { RxCross1 } from "react-icons/rx";
import {Link } from "react-router-dom"
const PaymentFailed = () => {
  return (
    <div className="payment-failed min-h-[100vh] flex items-center justify-center">
    <div className="payment-container w-[500px]  h-[500px] flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-center m-4">
        Payment failed
      </h1>
     <div className='bg-red rounded-full p-3'>
     <RxCross1 className="text-9xl text-center text-black" />
     </div>
     <Link to={"/cart"}> <button className="bg-red p-2 mt-5 rounded-full text-white">Go to card</button></Link>
    </div>
  </div>
  )
}

export default PaymentFailed