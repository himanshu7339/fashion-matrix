// Import Mongoose
const mongoose = require('mongoose');

// Define Order Schema
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model (if you have one)
    required: true,
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
    required: true,
  },
  shippingAddress: {
    address: String,
    city: String,
    postalCode: String,
    country: String,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

// Create Order model
const Order = mongoose.model('Order', orderSchema);

// Export the Order model
module.exports = Order;
