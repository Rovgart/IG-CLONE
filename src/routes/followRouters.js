import { followUser, getUserFollowers, getUserFollowing } from "../controllers/followControllers.js";
import express from "express";

const router = express.Router();

router.post("/follow", followUser);
router.get("/followers", getUserFollowers);
router.get("/following", getUserFollowing);

export default router;
