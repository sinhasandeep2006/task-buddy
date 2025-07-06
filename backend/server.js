import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRouter from  "././routes/authRoutes.js"
import reportRoutes from  "././routes/reportRoutes.js"
import taskRoutes from  "././routes/taskRoutes.js"
import userRoutes from  "././routes/userRoutes.js"
import { fileURLToPath } from "url";
import { dirname } from "path";

// Setup __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

connectDB();
const app = express();


// Middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL ,
     credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware to parse JSON and URL-encoded data
app.use(express.json());

// route
    //admin
app.use("/api/auth",authRouter)
app.use("/api/tasks",taskRoutes)
app.use("/api/reports",reportRoutes)

//     //users
app.use("/api/users",userRoutes)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//stating the  server

const PORT = process.env.PORT || 7000;

app.listen(PORT, ()=>console.log(`sever is running on the ${PORT}`));