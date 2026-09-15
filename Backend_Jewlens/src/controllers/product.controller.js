import { Product } from "../models/product.models.js";

export async function getproducts(req, res) {
  try {
    const products = await Product.find();
    return res.status(200).json({
      status: "success",
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Products fetching failed",
    });
  }
}

export async function getproductsbyid(req, res) {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    return res.status(200).json({
      status: "success",
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Products fetching failed",
    });
  }
}

export async function createProduct(req, res) {
  try {
    const products = await Product.create(req.body);
    return res.status(200).json({
      status: "success",
      message: "Products created successfully",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Products creating failed",
    });
  }
}
