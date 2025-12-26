import express from "express";

const router = express.Router();
import { registerUser,loginUser, logoutUser, isAuthUser} from "../controllers/user.controller.js";
import authUser  from "../middlewares/authUser.js";


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout",authUser, logoutUser);
router.get("/is-auth", authUser, isAuthUser);
export default router;