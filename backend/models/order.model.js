// Import Mongoose
import mongoose from "mongoose";

// Define Order Schema
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model (if you have one)
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Failed'],
    default: 'Pending',
  },
  paymentMethod: {
    type: String,
    default :"Online"
  },
  shippingAddress: {
    type: mongoose.Schema.Types.ObjectId,
    ref :"Shipping"
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

// Create Order model
export const Order = mongoose.model("Order", orderSchema);

