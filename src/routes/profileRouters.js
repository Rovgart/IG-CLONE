import { getUserProfile, getUserProfilePage } from "../controllers/profileController.js";
import express from "express";

const router = express.Router();

router.get("/profiles", getUserProfile);
router.get("/profiles/:username", getUserProfilePage);

export default router;
