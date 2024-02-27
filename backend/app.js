import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import Stripe from "stripe"
import cloudinary from "cloudinary";
import { connect } from "./config/mongodb.js";
import Razorpay  from "razorpay"
dotenv.config({ path: "./config/config.env" });
import cors from "cors";
const port = process.env.PORT;

// connect database
connect();

export const  stripe = new Stripe(process.env.STRIP_SECRET_KEY)

// cloudinary instance
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.API_SECRET,
});

//Razorpay instance

export const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// add required middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(cookieParser());

// import all route
import user from "./routes/user.route.js";
import product from "./routes/product.route.js";
import category from "./routes/category.route.js";
import review from "./routes/review.route.js";
import shipping from "./routes/shipping.route.js";
import payment from "./routes/payment.route.js";

app.use("/api/v1", user);
app.use("/api/v1", product);
app.use("/api/v1", category);
app.use("/api/v1", review);
app.use("/api/v1", shipping);
app.use("/api/v1", payment);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use((err, req, res, next) => {
  if (err.code === 11000) {
    return console.log("error 11000");
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
});
