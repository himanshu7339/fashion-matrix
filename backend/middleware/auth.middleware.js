import { User } from "../models/user.model.js";
import { ErrorHandler } from "./error.handler.js";
import jwt from "jsonwebtoken";

// isAuthenticate Middleware
export const isAuthenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return next(new ErrorHandler(401, "Please login"));
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    // get id
    const user = await User.findById(decode._id);

    if (!user) {
      return next(new ErrorHandler(401, "User not found"));
    }
    user.password = undefined;

    req.user = user;
    return next();
  } catch (error) {
    next(error);
  }
};

// is Admin middleware
const isAdmin = (req, res, next) => {
  const user = req.user;
  if (user.role !== "admin") {
    next(new ErrorHandler(401, "Only admin access this resource"));
  }
};
