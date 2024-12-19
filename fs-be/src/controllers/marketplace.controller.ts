import { Request, Response } from "express";
import { Product } from "../models/product.model";

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    if (error instanceof Error) {
      // Error is now type-safe
      res.status(500).json({ error: error.message });
    } else {
      // Handle unexpected errors (non-Error objects)
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
