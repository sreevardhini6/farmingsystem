import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import backgroundImage from "../assets/farm-bg.jpg"; // Import the background image

const HomePage: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use the imported image
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 20px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
            marginBottom: "20px",
          }}
        >
          Discover Farm-to-Table Freshness
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "700px",
            margin: "0 auto",
            textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)",
          }}
        >
          Supporting local farmers and delivering fresh, organic produce
          straight to your table. Join the movement today!
        </p>
      </div>

      {/* Introduction Section */}
      <div
        style={{
          padding: "60px 20px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            color: "#4CAF50",
          }}
        >
          What is Farm-to-Table?
        </h2>
        <p>
          The farm-to-table movement connects local farmers directly with
          consumers, emphasizing fresh, seasonal, and sustainably grown
          produce. It's about building community and reducing the distance food
          travels from the fields to your plate.
        </p>
        <p>
          By choosing farm-to-table, you're supporting small-scale farmers,
          reducing food waste, and enjoying the freshest, healthiest ingredients
          available.
        </p>
      </div>

      {/* Call-to-Action Section */}
      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Ready to Explore Our Marketplace?
        </h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 30px",
            fontSize: "1.2rem",
          }}
        >
          From farm-fresh produce to handcrafted artisanal goods, discover the
          best that our local farmers have to offer. Explore the marketplace
          and find the perfect ingredients for your next meal!
        </p>
        {/* Use Link instead of window.location.href */}
        <Link to="/marketplace">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "1.2rem",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#45a049")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#4CAF50")
            }
          >
            Visit Marketplace
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
