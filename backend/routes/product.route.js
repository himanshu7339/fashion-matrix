import express from "express";

import { isAuthenticate } from "../middleware/auth.middleware.js";
import {
  createProduct,
  updateProductById,
} from "../controllers/product.controller.js";
import { uploadImage } from "../middleware/multer.js";

const router = express.Router();

router.route("/createproduct").post(uploadImage, createProduct);
router.route("/updateproduct/:productId").put(uploadImage, updateProductById);

export default router;
