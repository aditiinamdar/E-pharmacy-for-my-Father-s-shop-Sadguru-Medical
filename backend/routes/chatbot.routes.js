import express from "express";
import { pharmacyChatbot } from "../controllers/chatbot.controller.js";

const router = express.Router();

router.post("/chat", pharmacyChatbot);

export default router;
