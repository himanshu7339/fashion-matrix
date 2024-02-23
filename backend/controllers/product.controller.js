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
    productDescription,
  } = req.body;

  const images = req.files;

  if (
    !productName ||
    !productPrice ||
    !productColor ||
    !productSize ||
    !productCategory ||
    !productDescription ||
    !images
  ) {
    return next(new ErrorHandler(401, "All product field are required"));
  }

  const existProductName = await Product.findOne({ productName: productName });

  if (existProductName)
    return next(new ErrorHandler(401, "Product name already exist"));

  const productImages = await uploadImages(images);

  const product = await Product.create({
    productName,
    productPrice,
    productColor,
    productSize,
    productCategory,
    productDescription,
    productImages: productImages,
  });
  return res.status(201).json({
    success: true,
    message: "New product created successfully",
    product,
  });
});

// Get all Products
export const getAllProducts = catchAsyncHandler(async (req, res, next) => {
  const products = await Product.find();
  if (!products) {
    return next(new ErrorHandler(404, "Products not found"));
  }
  res.status(201).json({
    success: true,
    products,
  });
});

// get Product By Id

export const getProductById = catchAsyncHandler(async (req, res, next) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);

  if (!product) return next(new ErrorHandler(404, "Products not found"));

  res.status(201).json({
    success: true,
    product,
  });
});

// update products by id

export const updateProductById = catchAsyncHandler(async (req, res, next) => {
  const { productId } = req.params;
  const images = req.files;
  const {
    productName,
    productPrice,
    productColor,
    productSize,
    productCategory,
    productReview,
    productDescription,
  } = req.body;

  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    {
      productName,
      productPrice,
      productColor,
      productSize,
      productCategory,
      productReview,
      productDescription,
    },
    { new: true }
  ).exec();

  if (images) {
    const result = await uploadImages(images);
    updatedProduct.productImages = [...updatedProduct.productImages, ...result];
    await updatedProduct.save();
  }

  res.status(201).json({
    success: true,
    message: "Product update successfully",
    updatedProduct,
  });
});

// delete product image
