import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import { connect } from "./config/mongodb.js";
dotenv.config({ path: "./config/config.env" });
import cors from "cors";
const port = process.env.PORT;

// connect database
connect();

// cloudinary instance
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.API_SECRET,
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

app.use("/api/v1", user);
app.use("/api/v1", product);
app.use("/api/v1", category);
app.use("/api/v1", review);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use((err, req, res, next) => {
  if(err.code === 11000){
    return console.log("error 11000")
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
});
