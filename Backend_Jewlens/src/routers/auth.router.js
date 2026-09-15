import { Router } from "express";

export const authRouter = Router();

authRouter.post("/api/auth/register", (req, res) => {
  return res.status(201).json({ message: "User registered" });
});

authRouter.post("/api/auth/login", (req, res) => {
  return res.status(200).json({ message: "User logged in" });
});
