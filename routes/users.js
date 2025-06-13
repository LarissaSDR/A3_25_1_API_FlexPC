import express from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/userController.js";
import { authenticateToken, isAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", createUser); 
router.get("/", authenticateToken, getAllUsers); 
router.get("/:id", authenticateToken, getUserById); 
router.delete("/:id", authenticateToken, isAdmin, deleteUser); 
router.put("/:id", authenticateToken, updateUser);

export default router;