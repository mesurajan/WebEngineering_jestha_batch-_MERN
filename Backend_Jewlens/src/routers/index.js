import { Router } from "express";
import { authRouter } from "./auth.router.js";
import { productRouter } from "./product.routers.js";
import { userdetailsRouter } from "./userdetails.router.js";

export const indexRouter = Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/products", productRouter);
indexRouter.use("/userdetails", userdetailsRouter);
