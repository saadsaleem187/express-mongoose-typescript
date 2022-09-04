import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc Get all products
// @route GET /api/products
// @access Public
const getAllProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// @desc Create a product
// @route GET /api/products
// @access Private
const createProduct = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Title is required");
  }
  const product = await Product.create(req.body);
  if (!product) {
    res.status(400);
    throw new Error("Product not created");
  }
  res.status(201).json(product);
});

// @desc Get product by id
// @route GET /api/products/:id
// @access Public
const getProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }
  res.status(200).json({ message: `Get Product ${req.params.id}` });
});

// @desc Update product
// @route PUT /api/products/:id
// @access Private
const updateProduct = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Title is required");
  }
  const product = await Product.findByIdAndUpdate(req.params.id, req.body);
  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }
  res.status(200).json({ message: `Update Product ${req.params.id}` });
});

// @desc Delete product
// @route DELETE /api/products/:id
// @access Private
const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }
  res
    .status(200)
    .json({ message: `Product ${req.params.id} deleted`, product: product });
});

module.exports = {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
