import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Review = mongoose.model("Review", reviewSchema);
