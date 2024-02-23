import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../app/actions/product/productAction";
const ShowProducts = () => {
  const dispatch = useDispatch();

//   const { products} = useSelector(
//     (state) => state.product
//   );

//   console.log(products)
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return <div className="show-products"></div>;
};

export default ShowProducts;
