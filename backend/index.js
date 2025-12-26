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

// 2. Middlewares
// UPDATED: Added your Render frontend URL to allowedOrigins
const allowedOrigins = [
    "http://localhost:5173",
    "https://sadguru-medical-pharmacy.onrender.com" 
];

app.use(cors({ 
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            return callback(new Error('The CORS policy for this site does not allow access from the specified Origin.'), false);
        }
        return callback(null, true);
    },
    credentials: true 
}));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 3. Routes
// ADDED: Root route so the base URL doesn't show "Cannot GET /"
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Sadguru Medical API is running successfully!",
        status: "Healthy"
    });
});

app.use("/images", express.static("uploads"));
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/chatbot", chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
