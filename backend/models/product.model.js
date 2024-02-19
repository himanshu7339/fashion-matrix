import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productImages: [
    {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
  ],

  productName: {
    type: String,
    required: true,
  },

  productPrice: {
    type: Number,
    required: true,
  },

  productColor: {
    type: [
      {
        type: String,
        required: true,
      },
    ],
  },

  productSize: {
    type: [
      {
        type: String,
        required: true,
        enum: ["XS", "S", "M", "L", "XL", "XXL"],
      },
    ],
  },

  productCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  productReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  productDescription: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model("Product", productSchema);
