import { TbRulerMeasure } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Rating } from "react-simple-star-rating";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
const ProductPage = () => {
  const [openDes, setOpenDes] = useState(false);

  const toggleDescription = () => {
    setOpenDes(!openDes);
  };
  return (
    <div className="product-page  ">
      <div className="product-page-content-div grid grid-cols-2 ">
        <div className="product-page-image grid grid-cols-2 gap-1 overflow-y-auto">
          {/* image */}
          <img
            src="https://images.pexels.com/photos/16770020/pexels-photo-16770020/free-photo-of-young-woman-in-a-white-dress-and-a-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <img
            src="https://images.pexels.com/photos/16770014/pexels-photo-16770014/free-photo-of-young-woman-in-a-white-dress-and-a-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <img
            src="https://images.pexels.com/photos/16770013/pexels-photo-16770013/free-photo-of-young-woman-in-a-white-dress-and-a-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <img
            src="https://images.pexels.com/photos/16770019/pexels-photo-16770019/free-photo-of-young-woman-in-a-white-dress-and-a-hat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <div className="product-information m-5 sticky top-4 ">
          <div className="product-name-price flex flex-col ">
            <h1 className="text-xl font-semibold">Relaxed Fit Flannel shirt</h1>

            <p className="text-[#9ca3af]">MRP inclusive of all taxes</p>

            <p className="text-xl">Rs. 1,999.00</p>
          </div>

          {/* div for color */}

          <div className="color-product mt-8">
            <p>Black/Checked</p>

            <div className="cloth-color flex gap-3 mt-2">
              {/* it will be array */}
              <div className="product-image-with-color border border-darkBlue p-4 rounded-full bg-red"></div>
              <div className="product-image-with-color border border-darkBlue p-4 rounded-full bg-red"></div>
              <div className="product-image-with-color border border-darkBlue p-4 rounded-full bg-red"></div>
              <div className="product-image-with-color border border-darkBlue p-4 rounded-full bg-red"></div>
            </div>
          </div>

          {/* div for size */}

          <div className="sizes-product mt-4">
            <h1 className="text-sm">Sizes</h1>

            {/* it will be array */}

            <div className="all-sizes-product flex mt-2 gap-2">
              <div className=" border pr-9 pl-9 pb-2 pt-2">XS</div>
              <div className=" border pr-9 pl-9 pb-2 pt-2">S</div>
              <div className=" border pr-9 pl-9 pb-2 pt-2">M</div>
              <div className=" border pr-9 pl-9 pb-2 pt-2">L</div>
              <div className=" border pr-9 pl-9 pb-2 pt-2">XL</div>
              <div className=" border pr-9 pl-9 pb-2 pt-2">XXL</div>
            </div>
          </div>

          {/* image size guide div */}

          <div className="size-guide flex justify-between mt-8">
            <p className="flex gap-2 items-center underline">
              <span>
                <TbRulerMeasure />
              </span>
              Size Guide
            </p>
            <p className="flex gap-2 items-center underline ">
              <span>
                <TfiEmail />
              </span>
              Size out of stock?
            </p>
          </div>

          {/* add to cart button */}
          <div className="add-to-card-button">
            <button className="border border-red p-2  mt-7 w-full bg-red flex items-center justify-center gap-2">
              <IoBag className="text-2xl" />
              Add{" "}
            </button>
          </div>

          {/* delivery-time */}
          <div className="delivery-time flex gap-2 items-center mt-5">
            <IoIosInformationCircleOutline />
            <p>Delivery Time : 2-7 days</p>
          </div>

          {/* reviews */}

          <div className="review-div flex items-center gap-2 mt-2">
            <Rating
              size={20}
              initialValue={3}
              fillColor="black"
              emptyClassName="flex"
            />
            (262 reviews)
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
              <p className="text-sm m-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum auctor dui ac justo congue tincidunt. Nunc in metus
                vel mauris convallis facilisis eu ac libero. Fusce ac justo nec
                odio vestibulum scelerisque vel sit amet enim. Sed luctus libero
                eu quam ultricies, id laoreet erat pellentesque. Vivamus sit
                amet velit nec tellus fermentum malesuada a quis metus. In hac
                habitasse platea dictumst. Integer et justo ut risus rhoncus
                bibendum. Morbi semper quam vel ante suscipit, eu consectetur
                orci cursus. Nullam vel elit ut elit condimentum maximus. Donec
                et risus vitae nisi venenatis condimentum. Proin ut vehicula
                metus. Duis et lectus vitae mauris tincidunt venenatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
