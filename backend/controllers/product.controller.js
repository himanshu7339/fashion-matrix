import { catchAsyncHandler } from "../middleware/catch.async.js";
import { ErrorHandler } from "../middleware/error.handler.js";
import { Product } from "../models/product.model.js";
import { uploadImages } from "../utils/upload.image.js";

// create new product

export const createProduct = catchAsyncHandler(async (req, res, next) => {
  const {
    productName,
    productPrice,
    productColor,
    productSize,
    productCategory,
    productReview,
    productDescription,
  } = req.body;

  const images = req.files;

  if (
    !productName ||
    !productPrice ||
    !productColor ||
    !productSize ||
    !productCategory ||
    !productReview ||
    !productDescription ||
    !images
  ) {
    return next(new ErrorHandler(401, "All product field are required"));
  }

  const productImages = await uploadImages(images);

  const product = await Product.create({
    productName,
    productPrice,
    productColor,
    productSize,
    productCategory,
    productReview,
    productDescription,
    productImages: productImages,
  });
  return res.status(201).json({
    success: true,
    message: "New product created successfully",
    product,
  });
});
