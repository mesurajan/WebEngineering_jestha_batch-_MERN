import { Router } from "express";
import {
  getproducts,
  createProduct,
  getproductsbyid,
} from "../controllers/product.controller.js";
import { validateCreateProduct } from "../validators/product.validators.js";
export const productRouter = Router();

productRouter.get("/", getproducts);

productRouter.get("/:id", getproductsbyid);

productRouter.post("/", validateCreateProduct, createProduct);

productRouter.delete("/", (req, res) => {
  return res.status(200).json({ message: "All products deleted" });
});

productRouter.put("/:id", (req, res) => {
  return res.status(200).json({ message: `Product  updated` });
});

productRouter.delete("/:id", (req, res) => {
  return res.status(200).json({ message: `Product deleted` });
});
