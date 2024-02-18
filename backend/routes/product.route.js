import express from "express";

import { isAuthenticate } from "../middleware/auth.middleware.js";
import { createProduct } from "../controllers/product.controller.js";
import { uploadImage } from "../middleware/multer.js";

const router = express.Router();

router.route("/createproduct").post(uploadImage, createProduct);

export default router;
