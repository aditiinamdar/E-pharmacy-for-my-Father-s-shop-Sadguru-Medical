import express from "express";
import { sellerLogin, sellerLogout,checkAuth } from "../controllers/seller.controller.js";
import { authSeller } from "../middlewares/authSeller.js";

const router = express.Router();

router.post("/login", sellerLogin);
router.get("/logout",authSeller,sellerLogout);
router.get("/is-auth", authSeller, checkAuth);

export default router;