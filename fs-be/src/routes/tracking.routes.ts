import express from "express";
import { trackOrder, placeOrder } from "../controllers/tracking.controller";
const router = express.Router();

// Define routes
router.get("/:orderId", trackOrder);  // Route for tracking an order
router.post("/", placeOrder);         // Route for placing an order

export { router as trackingRoutes };
