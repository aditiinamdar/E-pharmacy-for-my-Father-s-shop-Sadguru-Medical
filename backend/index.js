import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/connectDB.js"; 
import userRoutes from "./routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";
import addressRoutes from "./routes/address.routes.js";

import { connectCloudinary } from "./config/cloudinary.js";
import chatbotRoutes from "./routes/chatbot.routes.js";




const app = express();

// 1. Connect to Database
connectDB();
connectCloudinary();

// 2. Middlewares (MUST come before routes)
const allowedOrigins = ["http://localhost:5173"];
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json()); // Fixes the undefined req.body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 3. Routes (Now they can access the parsed req.body)
app.use("/images", express.static("uploads"));
app.use("/api/user", userRoutes);
app.use("/api/seller",sellerRoutes);
app.use("/api/product",productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/order",orderRoutes);
app.use("/api/address",addressRoutes);
app.use("/api/chatbot", chatbotRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});