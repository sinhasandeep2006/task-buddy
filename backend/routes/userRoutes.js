import express from "express";
import { getUsers,getuserid,deleteUser } from "../controller/userController.js";
import { adminOnly, protect } from ".././middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";
const router = express.Router();

// Auth Routes
router.get("/",protect,adminOnly, getUsers); // Register User
router.get("/:id", protect,getuserid);       // Login User
router.delete("/:id", protect, adminOnly, deleteUser); // Get User Profile
export default router;
