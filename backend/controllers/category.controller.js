import { catchAsyncHandler } from "../middleware/catch.async.js";
import { ErrorHandler } from "../middleware/error.handler.js";
import { Category } from "../models/category.model.js";

// create new category
export const createCategory = catchAsyncHandler(async (req, res, next) => {
  const { categoryName } = req.body;
  console.log(categoryName);
  if (!categoryName) {
    return next(new ErrorHandler(401, "Provide category mast "));
  }
  const existCategory = await Category.findOne({ categoryName: categoryName });
  if (existCategory) {
    return next(new ErrorHandler(403, "Category name already exist "));
  }
  const category = await Category.create({
    categoryName,
  });

  res.status(201).json({
    success: true,
    message: "Category create successfully",
  });
});

// get all category

export const getAllCategories = catchAsyncHandler(async (req, res, next) => {
  const categories = await Category.find();
  if (!categories) {
    return next(new ErrorHandler(404, "Categories not found"));
  }
  res.status(201).json({
    success: true,
    categories,
  });
});

// update category

export const updateCategory = catchAsyncHandler(async (req, res, next) => {
  const { categoryId } = req.params;
  const { categoryName } = req.body;

  const updatedCategory = await Category.findByIdAndUpdate(
    categoryId,
    { categoryName },
    {
      new: true,
    }
  );
  res.status(201).json({
    success: true,
    message: "Category update successfully",
    updatedCategory,
  });
});
// Delete category

export const deleteCategory = catchAsyncHandler(async (req, res, next) => {
  const { categoryId } = req.params;

  await Category.findByIdAndDelete(categoryId);
  res.status(201).json({
    success: true,
    message: "Category Deleted ",
  });
});
