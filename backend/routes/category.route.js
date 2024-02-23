import express from "express";

import { isAuthenticate } from "../middleware/auth.middleware.js";
import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory
} from "../controllers/category.controller.js";

const router = express.Router();

router.route("/createcategory").post(isAuthenticate, createCategory);
router.route("/categories").get(getAllCategories);
router.route("/updatecategory/:categoryId").put(updateCategory).delete(deleteCategory);

export default router;
