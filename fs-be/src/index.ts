import express from "express";
import cors from "cors";
import { connectDB } from "./config/db";
import contactRoutes from "./routes/contact.routes";
import marketplaceRoutes from "./routes/marketplace.routes";
import { trackingRoutes } from "./routes/tracking.routes";  // Correct import

import { errorHandler } from "./middlewares/error.middleware";

const app = express();

// Use environment variable for port or fallback to 3007
const PORT = process.env.PORT || 3007;

// Middleware
app.use(cors());
app.use(express.json());  // Use express's built-in json parser

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/products", marketplaceRoutes);
app.use("/api/orders", trackingRoutes);  // Corrected import for named export

// Fallback Error Middleware (place it last)
app.use(errorHandler);

// Connect to Database and Start Server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
    process.exit(1);  // Exit if DB connection fails
  });
