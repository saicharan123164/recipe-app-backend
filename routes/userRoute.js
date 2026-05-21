import express from "express";

import {
    registerUser,
    loginUser,
    getUsers,
    deleteUser
} from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

// Protected Route
router.get("/", authMiddleware, getUsers);

router.delete("/:id", authMiddleware, deleteUser);
export default router;