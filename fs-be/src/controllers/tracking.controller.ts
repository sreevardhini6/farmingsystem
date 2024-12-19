import { Request, Response, RequestHandler } from "express";
import { Order } from "../models/order.model";

// trackOrder function
export const trackOrder: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      res.status(404).json({ error: "Order not found" });
      return;
    }
    res.status(200).json(order);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};

// placeOrder function
export const placeOrder: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status = "Planted", estimatedDelivery = "5-7 Days" } = req.body;
    const order = new Order({ status, estimatedDelivery });
    await order.save();
    res.status(201).json(order);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
