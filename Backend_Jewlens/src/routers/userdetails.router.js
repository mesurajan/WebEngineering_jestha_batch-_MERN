import { Router } from "express";

export const userdetailsRouter = Router();

userdetailsRouter.get("/api/userdetails", (req, res) => {
  return res.status(200).json({ message: "User details endpoint" });
});
