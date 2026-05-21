import express from "express";

import {

    getReceipes,
    getReceipeById,
    addReceipe,
    updateReceipe,
    deleteReceipe

} from "../controllers/receipeController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


// Public Routes
router.get("/", getReceipes);

router.get("/:id", getReceipeById);


// Protected Routes
router.post("/", authMiddleware, addReceipe);

router.put("/:id", authMiddleware, updateReceipe);

router.delete("/:id", authMiddleware, deleteReceipe);

export default router;