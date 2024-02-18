import { catchAsyncHandler } from "../middleware/catch.async.js";
import { ErrorHandler } from "../middleware/error.handler.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register user
export const register = catchAsyncHandler(async (req, res, next) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return next(new ErrorHandler(404, "Please enter all field"));
  }
  const existEmail = await User.findOne({ email: email });

  if (existEmail) {
    return next(
      new ErrorHandler(406, "You have already account from this email")
    );
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    email,
    password: hashPassword,
    name,
  });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  return res
    .status(201)
    .cookie("token", token, {
      expires: new Date(Date.now() + 5 * 60 * 60 * 1000),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Register successfully",
    });
});

// login
export const login = catchAsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email: email });

  if (!userExist) {
    return next(new ErrorHandler(404, "Email and password incorrect"));
  }

  const matchPassword = await bcrypt.compare(password, userExist.password);

  if (!matchPassword) {
    return next(new ErrorHandler(404, "Invalid user"));
  }
  const token = jwt.sign({ _id: userExist._id }, process.env.JWT_SECRET);

  return res
    .status(201)
    .cookie("token", token, {
      expires: new Date(Date.now() + 5 * 60 * 60 * 1000),
      httpOnly: true,
    })
    .json({
      success: true,
      message: `${userExist.name} welcome back`,
    });
});

// get own profile
export const ownProfile = catchAsyncHandler(async (req, res, next) => {
  const user = req.user;

  return res.status(201).json({
    success: true,
    user,
  });
});

// update own profile
export const updateOwnProfile = catchAsyncHandler(async (req, res, next) => {
  const user = req.user;
  const { name, email, password } = req.body;

  const userId = user._id.toString();
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { name, email, password },
    { new: true }
  );
  updatedUser.password = undefined;
  return res.status(201).json({
    success: true,
    message: "Your details are update",
    updatedUser,
  });
});

// Delete own profile
export const DeleteOwnProfile = catchAsyncHandler(async (req, res, next) => {
  const user = req.user;

  const userId = user._id.toString();
  await User.findByIdAndDelete(userId);

  return res
    .status(201)
    .cookie("token", null, {
      expires: new Date(0),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Your account delete successfully",
    });
});

// logout user
export const logout = catchAsyncHandler(async (req, res, next) => {
  return res
    .status(201)
    .cookie("token", null, {
      expires: new Date(0),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Logout successfully",
    });
});
