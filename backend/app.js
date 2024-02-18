import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import { connect } from "./config/mongodb.js";
dotenv.config({ path: "./config/config.env" });
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

app.use(cookieParser());

// import all route
import user from "./routes/user.route.js";
import product from "./routes/product.route.js";

app.use("/api/v1", user);
app.use("/api/v1", product);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use((err, req, res, next) => {
  res.status(err.statusCode).json({
    success: false,
    error: err.message,
  });
});
