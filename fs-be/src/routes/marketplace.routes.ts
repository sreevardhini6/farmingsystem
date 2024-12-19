import { Router } from "express";
import { getProducts } from "../controllers/marketplace.controller";

const router = Router();
router.get("/", getProducts);

export default router;
