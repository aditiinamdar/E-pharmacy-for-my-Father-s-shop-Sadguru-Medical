import express from "express";
import authUser from "../middlewares/authUser.js";

import { authSeller } from "../middlewares/authSeller.js";
import { getAllOrders, getUserOrders, placeOrderCOD, placeOrderStripe } from "../controllers/order.controller.js";

const router = express.Router();
router.post("/cod", authUser, placeOrderCOD);
router.post("/stripe", authUser, placeOrderStripe);
router.get("/user", authUser, getUserOrders);
router.get("/seller", authSeller, getAllOrders);

export default router;