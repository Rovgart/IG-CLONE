import { createPost, getUserPost } from "../controllers/postController.js";
import express from "express";

const router = express.Router();

router.post("/post", createPost);
// in the url type the username of the user
router.get("/post/:username", getUserPost);

export default router;
