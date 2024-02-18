import express from "express";
import {
  DeleteOwnProfile,
  login,
  logout,
  ownProfile,
  register,
  updateOwnProfile,
} from "../controllers/user.controller.js";
import { isAuthenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/ownprofile").get(isAuthenticate, ownProfile);

router.route("/updateprofile").put(isAuthenticate, updateOwnProfile);
router.route("/deleteprofile").delete(isAuthenticate, DeleteOwnProfile);
router.route("/logout").get(logout);

export default router;
