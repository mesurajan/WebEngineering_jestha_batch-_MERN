import { Router } from "express";
import {
  getproducts,
  createProduct,
  getproductsbyid,
} from "../controllers/product.controller.js";
export const productRouter = Router();

productRouter.get("/", getproducts);

productRouter.get("/:id", getproductsbyid);

productRouter.post("/", createProduct);

productRouter.delete("/", (req, res) => {
  return res.status(200).json({ message: "All products deleted" });
});

productRouter.put("/:id", (req, res) => {
  return res.status(200).json({ message: `Product  updated` });
});

productRouter.delete("/:id", (req, res) => {
  return res.status(200).json({ message: `Product deleted` });
});
