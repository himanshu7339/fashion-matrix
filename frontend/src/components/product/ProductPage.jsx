import { TbRulerMeasure } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Rating } from "react-simple-star-rating";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import ReviewSection from "./ReviewSection";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../app/actions/product/productAction";
import { useParams } from "react-router-dom";
import { formatPriceWithCommas } from "../../utils/function";
import { addCart } from "../../app/features/cart/cartSlice";
import { toast } from "react-toastify";
const ProductPage = ({ setProgressBar }) => {
  const [openDes, setOpenDes] = useState(false);
  const [open, setOpen] = useState(false);
  const [productQty, setProductQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  
  const { productId } = useParams();

  const toggleDescription = () => {
    setOpenDes(!openDes);
  };

  useEffect(() => {
    setProgressBar(50);
    dispatch(getProductById(productId));
    setTimeout(() => {
      setProgressBar(100);
    }, 200);
  }, [dispatch, productId, setProgressBar]);

  const { product, loading } = useSelector((state) => state.product);

  // add to cart handler
  const addToCartHandler = (productName, productPrice, productImage, _id) => {
    if (!selectedColor || !selectedSize) {
      setError("Please select color and size before adding to cart");
      return;
    }

    const productItem = {
      _id,
      productName,
      productPrice,
      productImage,
      productQty,
      selectedColor,
      selectedSize,
    };

    dispatch(addCart(productItem));
    toast.success("Product added to cart");
    setError("");
  };

  
 if(error){
  toast.error(error)
  setError("")
 }
  // increasing product qty handler
  const increasingQty = () => {
    const newQty = productQty + 1;
    setProductQty(newQty);
  };

  // decreasing product qty handler
  const decreasingQty = () => {
    const newQty = productQty - 1;
    if (newQty < 1) {
      return;
    }
    setProductQty(newQty);
  };

  if (loading) {
    return <p>Loading......</p>;
  }

  // Check if product data is not available
  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <div className="product-page  ">
      <div className="product-page-content-div flex flex-col lg:grid lg:grid-cols-2 ">
        <div className="product-page-image grid grid-cols-2   gap-1 overflow-y-auto">
          {/* image */}

          {product &&
            product.productImages.map((image, index) => (
              <img key={index} src={image.url} alt="" />
            ))}
        </div>

        <div className="product-information m-5 sticky top-4 ">
          <div className="product-name-price flex flex-col ">
            <h1 className="text-xl  font-semibold">{product.productName}</h1>

            <p className="text-[#9ca3af]">MRP inclusive of all taxes</p>

            <p className="text-xl">
              ₹ {formatPriceWithCommas(product.productPrice)}
            </p>
          </div>

          {/* div for color */}

          <div className="color-product mt-8">
            <p>Color Options</p>

            <div className="cloth-color flex gap-3 mt-2">
              {product &&
                product.productColor.map((color, index) => (
                  <div
                  key={index}
                  className={`product-image-with-color border  p-4 rounded-full cursor-pointer ${
                    selectedColor === color ? "border-black border-2" : ""
                  }`}
                  style={{ background: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
                ))}
            </div>
          </div>

          {/* div for size */}

          <div className="sizes-product mt-4">
            <h1 className="text-sm">Sizes</h1>

            {/* it will be array */}

            <div className="all-sizes-product flex mt-2 gap-2 overflow-x-auto">
              {product &&
                product.productSize.map((size, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`border pr-4 pl-4 lg:pr-9 lg:pl-9 lg:pb-2 lg:pt-2 cursor-pointer ${
                      selectedSize === size ? "border-black border-2" : ""
                    }`}
                  >
                    {size}
                  </div>
                ))}
            </div>
          </div>

          {/* image size guide div */}

          <div className="size-guide flex justify-between mt-8">
            <p className="flex gap-2 items-center underline cursor-pointer">
              <span>
                <TbRulerMeasure />
              </span>
              Size Guide
            </p>
            <p className="flex gap-2 items-center underline cursor-pointer">
              <span>
                <TfiEmail />
              </span>
              Size out of stock?
            </p>
          </div>

          {/* add to cart button */}
          <div className="add-to-card-button flex flex-col lg:flex-row lg:items-center gap-3">
            <button
              onClick={() =>
                addToCartHandler(
                  product.productName,
                  product.productPrice,
                  product.productImages[0].url,
                  product._id
                )
              }
              className="border border-red p-2  mt-7 w-full bg-red flex items-center justify-center gap-2"
            >
              <IoBag className="text-2xl" />
              Add{" "}
            </button>
            
            <div className="product-qty flex  mt-7">
              <button
                onClick={decreasingQty}
                className="bg-red pl-5 pr-5 pt-2 pb-2"
              >
                -
              </button>
              <input
                value={productQty}
                readOnly
                type="number"
                className="border remove-arrow focus:outline-none text-center w-16"
              />
              <button
                onClick={increasingQty}
                className="bg-red pl-5 pr-5 pt-2 pb-2"
              >
                +
              </button>
            </div>
          </div>

          {/* delivery-time */}
          <div className="delivery-time flex gap-2 items-center mt-5">
            <IoIosInformationCircleOutline />
            <p>Delivery Time : 2-7 days</p>
          </div>

          {/* reviews */}

          <div className="review-div flex items-center gap-2 mt-4 cursor-pointer">
            <Rating
              size={20}
              initialValue={3}
              fillColor="black"
              emptyClassName="flex"
            />
            <p onClick={() => setOpen(true)} className="font-semibold ">
              (262 reviews)
            </p>

            <ReviewSection open={open} setOpen={setOpen} />
          </div>

          {/* description */}

          <div
            className={`description-product-page mt-6 border-b-[1px] ${
              openDes ? "open" : ""
            }`}
            onClick={toggleDescription}
          >
            <div className="cursor-pointer menu-dropdown flex items-center p-5 border-t-[1px]  justify-between">
              <h1 className="heading">Description & fit</h1>
              {openDes ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            <div
              className={`transition-max-height duration-300 overflow-hidden ${
                openDes ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="text-sm m-2">{product.productDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
