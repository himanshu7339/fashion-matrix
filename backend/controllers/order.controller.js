import { catchAsyncHandler } from "../middleware/catch.async.js";
import { Order } from "../models/order.model.js";

export const createOrder = catchAsyncHandler(async (req, res, next) => {
  const user = req.user;
  const { products, shippingAddress, totalAmount } = req.body;
console.log("api is hit")
  console.log(products, shippingAddress, totalAmount)
  const order = await Order.create({
    user: user._id,
    products,
    shippingAddress: shippingAddress._id,
    totalAmount,
  });

  res.status(201).json({
    success: true,
    message: "Order create successfully",
    order
  });
});
