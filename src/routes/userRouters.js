import express from "express";
import { getAllUsers, getUser, createUser, updateUser, deleteUser, settingUserRoles, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/user/:username", getUser);
router.get("/users/:username", getUsers);

router.put("/user/role/:username", settingUserRoles);
router.put("/users/:username", updateUser); // todo logic

router.post("/users", createUser);
router.delete("/users/:username", deleteUser); // todo logic

export default router;
