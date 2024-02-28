import express from "express";

import { isAuthenticate } from "../middleware/auth.middleware.js";
import { createOrder } from "../controllers/order.controller.js";


const router = express.Router();

router.route("/createorder").post(isAuthenticate,createOrder);

export default router;