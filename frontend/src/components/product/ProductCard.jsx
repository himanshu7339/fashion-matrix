import React from "react";

const ProductCard = ({productImage,productTitle,productPrice}) => {
  return (
    <div className="product-card">
      <div className="product-card-image ">
        <img width={400} src={productImage} alt="" />
      </div>
      
      <h1 className="product-cart-title font-semibold lg:text-xl mt-2">{productTitle}</h1>
      <h1 className="product-price lg:text-xl text-semibold mt-2">
        <span>₹</span> {`${productPrice}`}
      </h1>
    </div>
  );
};

export default ProductCard;
