import { stripe } from "../app.js";
import { catchAsyncHandler } from "../middleware/catch.async.js";
const YOUR_DOMAIN = "http://localhost:5173";
export const processPayment = catchAsyncHandler(async (req, res, next) => {
  const { cart } = req.body;
  
  const lineItems = cart.map((item) => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: item.productName, // Use the product name from your cart item
          images: [item.productImage], // Use the product image from your cart item
        },
        unit_amount: item.productPrice * 100, // Convert price to cents (Stripe requires amount in cents)
      },
      quantity: item.productQty,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/paymentsuccess`,
    cancel_url: `${YOUR_DOMAIN}/paymentFailed`,
  });

  return res.json({ id: session.id });
});
