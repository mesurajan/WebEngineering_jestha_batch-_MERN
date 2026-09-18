import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";

export const authRouter = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
