import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser, test } from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/user/:username", getUser);
router.post("/users", createUser);
router.put("/users/:username", updateUser); // todo logic
router.delete("/users/:username", deleteUser); // todo logic
router.get("/users/test", test);

export default router;
