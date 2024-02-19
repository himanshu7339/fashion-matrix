import { catchAsyncHandler } from "../middleware/catch.async.js";
import { ErrorHandler } from "../middleware/error.handler.js";
import { Product } from "../models/product.model.js";
import { Review } from "../models/review.model.js";

// create new review
export const createReview = catchAsyncHandler(async (req, res, next) => {
  const { reviewName, productId } = req.body;
  const userId = req.user._id.toString();
  const { name } = req.user;

  if (!reviewName) {
    return next(new ErrorHandler(401, "Please type your review"));
  }

  const isReviewExist = await Review.findOne({ user: userId });

  if (isReviewExist) {
    isReviewExist.reviewName = reviewName;
    await isReviewExist.save();
    return res.status(201).json({
      success: true,
      message: `Hey ${name} your review is updated`,
      review: isReviewExist,
    });
  }
  const review = await Review.create({
    reviewName,
    user: userId,
  });

  await Product.updateOne(
    { _id: productId },
    {
      $push: {
        productReview: review,
      },
    }
  ).exec();

  return res.status(201).json({
    success: true,
    message: `Hey ${name} thank you for review`,
    review,
  });
});

// delete review

export const deleteReview = catchAsyncHandler(async (req, res, next) => {});
