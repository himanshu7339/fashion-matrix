import express from "express";

import { isAuthenticate } from "../middleware/auth.middleware.js";
import { createCategory } from "../controllers/category.controller.js";

const router = express.Router();

router.route("/createcategory").post(isAuthenticate, createCategory);

export default router;
