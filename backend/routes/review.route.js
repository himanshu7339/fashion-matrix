import express from "express";

import { isAuthenticate } from "../middleware/auth.middleware.js";
import { createReview } from "../controllers/review.controller.js";

const router = express.Router();

router.route("/createreview").post(isAuthenticate, createReview);

export default router;