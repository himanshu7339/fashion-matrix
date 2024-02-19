import { catchAsyncHandler } from "../middleware/catch.async.js";
import { ErrorHandler } from "../middleware/error.handler.js";
import { Category } from "../models/category.model.js";

export const createCategory = catchAsyncHandler(async (req, res, next) => {
  const { categoryName } = req.body;
  console.log(categoryName);
  if (!categoryName) {
    return next(new ErrorHandler(401, "Provide category mast "));
  }

  const category = await Category.create({
    categoryName,
  });

  res.status(201).json({
    success: true,
    message: "Category create successfully",
  });
});
