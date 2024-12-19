import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  status: { type: String, enum: ["Planted", "Harvesting", "In Transit", "Delivered"], required: true },
  estimatedDelivery: { type: String },
});

export const Order = mongoose.model("Order", orderSchema);
