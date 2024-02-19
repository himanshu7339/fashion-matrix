import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  reviewName: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Review = mongoose.model("Review", reviewSchema);
