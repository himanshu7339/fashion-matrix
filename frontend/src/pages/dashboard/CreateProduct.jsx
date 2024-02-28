import { useState, useRef, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../app/actions/category/categoryAction";
import { createProduct } from "../../app/actions/product/productAction";
import { toast } from "react-toastify";
import {
  clearError,
  clearMessage,
} from "../../app/features/product/productSlice";
const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(null);
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productSizes, setProductSizes] = useState([]);
  const [productColors, setProductColors] = useState([]);
  const [customColor, setCustomColor] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { message, error, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllCategories());
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [message, error, dispatch]);

  //   functions for images

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files);
      setSelectedImages(newImages);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productCategory", productCategory);
    console.log(productCategory);
    formData.append("productDescription", productDescription);
    selectedImages.forEach((image) => {
      formData.append(`image`, image);
    });

    productSizes.forEach((productSize) => {
      formData.append("productSize", productSize);
    });
    productColors.forEach((productColor) => {
      formData.append("productColor", productColor);
    });

    dispatch(createProduct(formData));
    // Clear the form fields and reset the state
    

  };

  const handleProductSizeChange = (e) => {
    const productSize = e.target.value;
    if (!productSizes.includes(productSize)) {
      setProductSizes([...productSizes, productSize]);
    }
  };

  const handleRemoveSize = (index) => {
    setProductSizes((prevColors) => prevColors.filter((_, i) => i !== index));
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  // functions for color change

  const handleCustomColorChange = (e) => {
    const inputColor = e.target.value;
    setCustomColor(inputColor);
  };

  const handleAddCustomColor = (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (customColor && !productColors.includes(customColor)) {
      setProductColors([...productColors, customColor]);
      setCustomColor("");
    }

    if (customColor && productColors.includes(customColor)) {
      alert("You added the same color again");
    }
  };

  const handleRemoveColor = (e, index) => {
    e.preventDefault();
    setProductColors((prevColors) => prevColors.filter((_, i) => i !== index));
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Create Product</h2>
      <form onSubmit={onSubmitHandler} className="max-w-md mx-auto">
        <label className="block mb-2 ">
          Product Name
          <input
            type="text"
            name="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Product Name"
            className="form-input mt-1 block w-full border p-2 focus:outline-none placeholder:text-sm"
          />
        </label>

        <label className="block mb-2">
          Product Price
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            name="productPrice"
            placeholder="Product Price"
            className="form-input mt-1 remove-arrow  block w-full border p-2 focus:outline-none placeholder:text-sm"
          />
        </label>

        <label className="block mb-2">
          Product Description
          <input
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            name="productDescription"
            placeholder="Product Description"
            className="form-input mt-1 block w-full border p-2 focus:outline-none placeholder:text-sm"
          />
        </label>

        {/* for Select product Size */}
        <label className="">
          <h2 className="mb-2">Cloth Size</h2>
          <select
            className="p-2 text-sm border focus:outline-none  "
            onChange={handleProductSizeChange}
          >
            <option value="" disabled selected>
              Select Cloth Size
            </option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>

          {/* Display selected Size */}
          <div
            className={`mt-4 ${productSizes.length > 0 ? "block" : "hidden"}`}
          >
            <h3 className="text-sm mb-2 font-bold">Selected Size</h3>
            <ul>
              {productSizes.map((size, index) => (
                <li key={index} className={`text-${size} mb-2 border p-1`}>
                  {size}
                  <button
                    className="ml-2 p-1 text-xs text-red"
                    onClick={() => handleRemoveSize(index)}
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </label>

        {/* For select color */}
        <div className=" mt-6">
          <h2 className="mb-2">Color Selector</h2>

          <div className="flex ">
            <input
              type="color"
              className="  border mr-2 focus:outline-none"
              placeholder="Example : #f1f1f1"
              value={customColor}
              onChange={handleCustomColorChange}
            />
            <Button
              type="submit"
              className="bg-red rounded-none shadow-none hover:shadow-none text-xs"
              onClick={(e) => handleAddCustomColor(e)}
            >
              Add Color
            </Button>
          </div>

          <div
            className={`mt-4 ${productColors.length > 0 ? "block" : "hidden"}`}
          >
            <h3 className="text-sm mb-2 font-bold">Selected Colors:</h3>
            <ul className="border p-2">
              {productColors.map((color, index) => (
                <li
                  key={index}
                  className={`text-${color} mb-2 flex items-center `}
                >
                  <span
                    style={{
                      background: color.includes("#") ? color : `#${color}`,
                      padding: "0.7rem",
                    }}
                  ></span>

                  <button
                    className="ml-2 p-1 text-xs text-red"
                    onClick={(e) => handleRemoveColor(e, index)}
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* for select product category */}

        <div className="max-w-md mx-auto mt-8">
          <label
            htmlFor="categorySelect"
            className="block text-sm font-medium text-gray-700"
          >
            Select a Category:
          </label>
          <select
            id="categorySelect"
            name="category"
            onChange={(e) => setProductCategory(e.target.value)}
            value={productCategory}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            {categories.map((category, index) => (
              <option key={index} value={category._id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
        {/* for image input */}

        <div className="product-image-div mt-7">
          <h2 className="">Product Images</h2>

          <div className="flex mb-4">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
              name="imageInput"
              id="imageInput"
              ref={fileInputRef}
            />
            <Button
              type="button"
              onClick={handleButtonClick}
              className="bg-red rounded-none shadow-none hover:shadow-none  "
            >
              Add Images
            </Button>
          </div>

          <div className="flex flex-wrap">
            {selectedImages.map((image, index) => (
              <div key={index} className="relative mt-5">
                <img
                  width={300}
                  src={URL.createObjectURL(image)}
                  alt={`preview-${index}`}
                />
                <button
                  className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full cursor-pointer"
                  onClick={() => handleRemoveImage(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <Button
            loading={loading}
            type="submit"
            className="bg-red rounded-none shadow-none hover:shadow-none  "
          >
            Create Product
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
