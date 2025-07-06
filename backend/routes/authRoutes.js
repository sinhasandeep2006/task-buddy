import express from "express";
import { registerUser, loginUser, getUserProfile, updateUserProfile , googleAuth} from "../controller/authController.js";
import { protect } from ".././middlewares/authMiddleware.js";
import upload from "../middlewares/uploadMiddleware.js";
const router = express.Router();

// Auth Routes
router.post("/register", registerUser); // Register User
router.post("/login", loginUser);       // Login User
router.get("/profile", protect, getUserProfile); // Get User Profile
router.put("/profile", protect, updateUserProfile); // Update Profile

router.post("/google", googleAuth);
router.post("/upload-image" ,upload.single("image"),(req,res)=>{
    if(!req.file){
        return res
        .status(400)
        .json({
          message: "Unable to Get your file this moment please try later !!",
        });
    }
    const imageUrl= `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`

    console.log("Image URL:", imageUrl);
    res.status(200).json({ url: imageUrl });
})
export default router;
