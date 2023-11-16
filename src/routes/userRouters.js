import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/user/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser); // todo logic
router.delete("/users/:id", deleteUser); // todo logic

export default router;
