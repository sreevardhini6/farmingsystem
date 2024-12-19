import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import farmBackground from "../assets/farm1.jpg"; // Keeping your background image

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface Order {
  id: number;
  items: CartItem[];
  total: number;
  status: string; // Status such as "Planted", "Harvesting", etc.
  estimatedDelivery: string; // E.g., "5-7 Days"
  customerAddress: string; // Customer's address
}

const Dashboard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>(location.state?.cart || []);
  const [orders, setOrders] = useState<Order[]>([]);

  // Calculate the total price for the cart
  const calculateTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle placing an order
  const placeOrder = () => {
    if (cart.length === 0) return; // Prevent empty orders

    const newOrder: Order = {
      id: orders.length + 1, // Assign a unique ID to each order
      items: [...cart],
      total: calculateTotal(),
      status: "Planted", // Initial status
      estimatedDelivery: "5-7 Days", // You can change this based on the delivery logic
      customerAddress: "123 Farm Lane, Farmville", // Replace with the actual address logic
    };

    setOrders([...orders, newOrder]); // Append the new order to the orders list
    setCart([]); // Clear the cart after placing an order
  };

  // Handle removing an item from the cart
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Navigate to the tracking page with the full order details
  const handleTrackOrder = (orderId: number) => {
    const orderToTrack = orders.find(order => order.id === orderId);
    if (orderToTrack) {
      navigate("/tracking", { state: { order: orderToTrack } });
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        backgroundImage: `url(${farmBackground})`, // Retaining the background
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>Your Activity</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Cart Section */}
        <section
          style={{
            flex: "1",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ color: "#00796b" }}>Your Cart</h2>
          {cart.length > 0 ? (
            <>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {cart.map((item) => (
                  <li
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>${item.price * item.quantity}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "#e53935",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <h3 style={{ textAlign: "right" }}>Total: ${calculateTotal()}</h3>
              <button
                onClick={placeOrder}
                style={{
                  display: "block",
                  margin: "10px auto",
                  padding: "10px 20px",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
              >
                Place Order
              </button>
            </>
          ) : (
            <p style={{ color: "#888", textAlign: "center" }}>
              Your cart is empty.
            </p>
          )}
        </section>

        {/* Orders Section */}
        <section
          style={{
            flex: "1",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h2 style={{ color: "#00796b" }}>Order History</h2>
          {orders.length > 0 ? (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {orders.map((order) => (
                <li
                  key={order.id}
                  style={{
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Order #{order.id}</h3>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    {order.items.map((item) => (
                      <li
                        key={item.id}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>
                          {item.name} (x{item.quantity})
                        </span>
                        <span>${item.price * item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                  <h4 style={{ textAlign: "right", marginTop: "10px" }}>
                    Total: ${order.total}
                  </h4>
                  {/* Removed stage, estimated delivery, and address from here */}
                  <button
                    onClick={() => handleTrackOrder(order.id)}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#00796b",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    Track Order
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: "#888", textAlign: "center" }}>
              No orders placed yet.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
