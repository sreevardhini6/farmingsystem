import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import farmBackground from "../assets/farm4.jpg";

// Define Order interface
interface Order {
  id: number;
  name: string;
  quantity: number;
  status: string; // E.g., "Planted", "Harvesting", "In Transit", "Delivered"
  estimatedDelivery: string; // E.g., "5-7 Days"
  customerAddress: string; // Customer's address
}

const RealTimeTracking: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);

  // Check if order is available from location state
  useEffect(() => {
    if (location.state?.order) {
      setOrder(location.state.order);
    }
  }, [location.state]);

  // Redirect user to the marketplace if no order exists
  const redirectToMarketplace = () => {
    navigate("/marketplace");
  };

  if (!order) {
    return (
      <div style={{ fontFamily: "'Roboto', sans-serif" }}>
        {/* Upper Half with Background Image */}
        <div
          style={{
            backgroundImage: `url(${farmBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
            color: "white",
            padding: "50px",
            textAlign: "center",
          }}
        >
          <h1>Order Tracking</h1>
          <p>You haven't placed any orders yet.</p>
        </div>

        {/* Lower Half asking user to visit marketplace */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
            To track an order, please place an order in the marketplace.
          </h2>
          <button
            onClick={redirectToMarketplace}
            style={{
              padding: "10px 20px",
              backgroundColor: "#00796b",
              color: "#fff",
              fontSize: "1.2rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Go to Marketplace
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Upper Half with Background Image */}
      <div
        style={{
          backgroundImage: `url(${farmBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          color: "white",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h1>Order Tracking</h1>
        <p>Tracking your order #{order.id}</p>
      </div>

      {/* Lower Half with Order Details */}
      <div
        style={{
          padding: "20px",
          background: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Order #{order.id}</h2>
        <p><strong>Stage:</strong> {order.status}</p>
        <p><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</p>
        <p><strong>Delivery Address:</strong> {order.customerAddress}</p>
      </div>
    </div>
  );
};

export default RealTimeTracking;
