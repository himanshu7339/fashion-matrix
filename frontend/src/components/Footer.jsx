import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaYoutube,FaGooglePay,FaRegCopyright  } from "react-icons/fa";
import { FaPinterest,FaCcVisa } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import India from "../assets/icons/India-flag.jpg"

const Footer = () => {
  return (
    <div
      style={{ borderTop: "0.5rem solid white", background: "black" }}
      className="footer  text-white"
    >
      <div className="footer flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between text-white lg:items-center m-6 ">
        <div className="support flex flex-col">
          <h1 className="text-xl font-semibold mb-2">Support</h1>
          <Link>Contact Us</Link>
          <Link>Promotions & Sale</Link>
          <Link>Track Order</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms & Conditions </Link>
          <Link>Cookie Setting</Link>
        </div>
        <div className="faqs flex flex-col">
          <h1 className="mb-2">FAQS</h1>
          <Link>My Account</Link>
          <Link>Return Policy</Link>
          <Link>Tech Glossary</Link>
          <Link>Initiate Return</Link>
        </div>

        <div className="about flex flex-col">
          <h1 className="text-xl font-semibold mb-2">About</h1>
          <Link>Company</Link>
          <Link>Corporate News</Link>
          <Link>Press Centre</Link>
          <Link>Investors</Link>
          <Link>Sustainability</Link>
          <Link>Careers</Link>
          <Link>Store Finder</Link>
        </div>

        <div className="stay-up-to-date">
            <h1 className="text-2xl mb-5 text-center lg:text-start">Stay Up To Date</h1>
          <div className="social-media flex text-3xl gap-6">
            <a href="">
              <FaYoutube />
            </a>
            <a href="">
              <BsTwitterX />
            </a>
            <a href="">
              <FaPinterest />
            </a>
            <a href="">
              <RiInstagramFill />
            </a>
            <a href="">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="line-div flex justify-center ">
        <div className="border bg-white w-[90%] "></div>
      </div>

      {/* bottom line only */}
      <div className="footer-bottom-details   ">
      <div className="bottom-content p-6 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0 lg:justify-between">
        <div className="payment-options text-4xl flex gap-6 items-center">
        <FaGooglePay />
        <CiCreditCard1 />
        <FaCcVisa />
        </div>

        <div className="india-flag">
            <img width={70} src={India} alt="india-flag" />
        </div>

        <div className="copy-right flex items-center gap-3">
        <FaRegCopyright /> <p>Fashion Matrix India,2024.ALL RIGHT RESERVED</p>
        </div>
      </div>

      </div>

      
    </div>
  );
};

export default Footer;
