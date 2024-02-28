import express from "express";

import { isAdmin, isAuthenticate } from "../middleware/auth.middleware.js";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/product.controller.js";
import { uploadImage } from "../middleware/multer.js";

const router = express.Router();

router.route("/products").get( getAllProducts);
router.route("/createproduct").post(isAuthenticate, isAdmin,uploadImage, createProduct);
router.route("/updateproduct/:productId").put(isAuthenticate, isAdmin,uploadImage, updateProductById);
router.route("/product/:productId").get(getProductById);

export default router;
