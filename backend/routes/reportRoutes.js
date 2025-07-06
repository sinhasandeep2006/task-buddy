import express from "express";
import { exportTaskReoport,exportUserReoport } from "../controller/reportController.js";
import { adminOnly, protect } from ".././middlewares/authMiddleware.js";

const router = express.Router();

// Auth Routes
router.get("/export/tasks",protect, exportTaskReoport); // Register User
router.get("/export/users", protect,exportUserReoport);       // Login User

export default router;
