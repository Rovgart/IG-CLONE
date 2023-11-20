import express from "express";
import { signIn } from "../controllers/loggerController.js";

const router = express.Router();

router.post("/login", signIn); // todo logiuc

export default router;
