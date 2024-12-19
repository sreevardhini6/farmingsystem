import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import farmBackground from "../assets/farm1.jpg";

// Define the interface for a product
interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

const Marketplace: React.FC = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCartButton, setShowCartButton] = useState(false);
  const [recentlyAdded, setRecentlyAdded] = useState<string | null>(null); // Track recently added product name

  // Sample product list
  const products: Product[] = [
    { id: 1, name: "Tomatoes", price: 10 },
    { id: 2, name: "Lettuce", price: 15 },
    { id: 3, name: "Carrots", price: 12 },
    { id: 4, name: "Potatoes", price: 8 },
  ];

  // Function to handle adding to cart
  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Increment quantity if the item already exists in the cart
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add a new item to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setShowCartButton(true);
    setRecentlyAdded(product.name); // Show "Added to Cart!" message
    setTimeout(() => setRecentlyAdded(null), 2000); // Remove the message after 2 seconds
  };

  // Navigate to the dashboard with cart data
  const goToCart = () => {
    navigate("/dashboard", { state: { cart } });
  };

  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        backgroundImage: `url(${farmBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#2e7d32",
          }}
        >
          Welcome to the Marketplace
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#333",
          }}
        >
          Select your products and add them to the cart.
        </p>
        {recentlyAdded && (
          <p
            style={{
              color: "#4CAF50",
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            {recentlyAdded} added to Cart!
          </p>
        )}
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#2e7d32", fontSize: "1.5rem" }}>{product.name}</h3>
            <p style={{ fontSize: "1.2rem", color: "#333" }}>${product.price}</p>
            <button
              onClick={() => addToCart(product)}
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
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {showCartButton && (
        <button
          onClick={goToCart}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          Go to Cart
        </button>
      )}
    </div>
  );
};

export default Marketplace;
