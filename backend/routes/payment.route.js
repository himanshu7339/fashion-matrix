import express from "express";

import { isAuthenticate } from "../middleware/auth.middleware.js";
import {  processPayment } from "../controllers/payment.controller.js";

const router = express.Router();
router.route("/create-checkout-session").post(isAuthenticate,processPayment);

export default router;
