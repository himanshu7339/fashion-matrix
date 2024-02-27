import mongoose from "mongoose";

const shippingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  postcode: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Shipping = mongoose.model("Shipping", shippingSchema);
