import { Shipping } from "../models/shipping.model.js";
import { ErrorHandler } from "../middleware/error.handler.js";
import { catchAsyncHandler } from "../middleware/catch.async.js";





export const createShipping = catchAsyncHandler(async (req, res, next) => {
  const { name, city, address, postcode, phoneNumber } = req.body;

  if (!name || !city || !address || !postcode || !phoneNumber) {
    return next(new ErrorHandler(406, "All filed required"));
  }

  const shipping = await Shipping.create({
    name,
    city,
    address,
    postcode,
    phoneNumber,
  });

  res.status(200).json({
    success: true,
    shipping,
    message: "Your shipping information saved",
  });
});
