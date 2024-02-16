import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productImage, productTitle, productPrice }) => {
  return (
    <Link to={"/product"} className="product-card">
      <div className="product-card-image ">
        <img width={400} src={productImage} alt="" />
      </div>

      <h1 className="product-cart-title text-sm  lg:text-xl mt-2">
        {productTitle}
      </h1>
      <h1 className="product-price text-sm lg:text-xl text-semibold mt-1">
        <span>₹</span> {`${productPrice}`}
      </h1>
    </Link>
  );
};

export default ProductCard;
