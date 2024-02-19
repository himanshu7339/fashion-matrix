import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  products: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Category = mongoose.model("Category", categorySchema);
