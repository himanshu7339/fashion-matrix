import express from "express";

import { isAuthenticate } from "../middleware/auth.middleware.js";
import { createShipping } from "../controllers/shipping.controller.js";

const router = express.Router();

router.route("/createshipping").post(createShipping);

export default router;
