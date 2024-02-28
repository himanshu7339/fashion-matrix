import express from "express";

import { isAdmin, isAuthenticate } from "../middleware/auth.middleware.js";
import {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.route("/createcategory").post(isAuthenticate, isAdmin, createCategory);
router.route("/categories").get(getAllCategories);
router
  .route("/updatecategory/:categoryId")
  .put(isAuthenticate, isAdmin,updateCategory)
  .delete(isAuthenticate, isAdmin,deleteCategory);

export default router;
