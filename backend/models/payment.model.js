import Mongoose from "mongoose";

const paymentSchema = new Mongoose.Schema({
  razorpay_signature: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Payment = Mongoose.model("Payment", paymentSchema);