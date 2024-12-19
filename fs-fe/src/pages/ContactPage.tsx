import React, { useState } from "react";
import farmBackground from "../assets/farm3.jpg"; // Import the image

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Add state for success message

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, subject, message });
    
    // Display success message after form submission
    setSuccessMessage("Your message has been sent successfully!");
    
    // Clear form fields (optional)
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Upper Half with Background Image */}
      <div
        style={{
          backgroundImage: `url(${farmBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      ></div>

      {/* Lower Half with Contact Form and Information */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "40px",
          maxWidth: "1200px",
          margin: "40px auto",
        }}
      >
        {/* Get in Touch Form Section */}
        <div
          style={{
            flex: 0.35,
            padding: "30px",
            marginRight: "20px",
            marginLeft: "150px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#333333",
              fontSize: "1.8rem",
              fontWeight: "bold",
            }}
          >
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#555555",
                }}
              >
                Full Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #cccccc",
                  boxSizing: "border-box",
                  fontSize: "16px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#555555",
                }}
              >
                Email Address:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #cccccc",
                  boxSizing: "border-box",
                  fontSize: "16px",
                }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#555555",
                }}
              >
                Subject:
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #cccccc",
                  boxSizing: "border-box",
                  fontSize: "16px",
                }}
              />
            </div>
            <div style={{ marginBottom: "25px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#555555",
                }}
              >
                Message:
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #cccccc",
                  boxSizing: "border-box",
                  fontSize: "16px",
                  height: "100px",
                }}
              />
            </div>
            <div
              style={{
                marginBottom: "25px",
                textAlign: "center",
              }}
            >
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  backgroundColor: "#00796b",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#004d40")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#00796b")
                }
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Success Message Section */}
          {successMessage && (
            <div
              style={{
                marginTop: "20px",
                padding: "10px",
                backgroundColor: "#d4edda",
                color: "#155724",
                border: "1px solid #c3e6cb",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              {successMessage}
            </div>
          )}
        </div>

        {/* Contact Information Section */}
        <div
          style={{
            flex: 0.55,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: "100px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#333333",
              fontSize: "1.8rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Contact Information
          </h2>
          <div
            style={{
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#00796b", fontSize: "1.5rem" }}>
              Headquarters:
            </h3>
            <p style={{ color: "#555555", fontSize: "1rem" }}>
              1234 Farm Street, Organic City, OC 56789
            </p>
          </div>

          <div
            style={{
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#00796b", fontSize: "1.5rem" }}>
              Sales Contact:
            </h3>
            <p style={{ color: "#555555", fontSize: "1rem" }}>
              Email:{" "}
              <a href="mailto:sales@farmtocompany.com">sales@farmtocompany.com</a>
            </p>
            <p style={{ color: "#555555", fontSize: "1rem" }}>
              Phone: +1 (123) 456-7890
            </p>
          </div>

          <div
            style={{
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#00796b", fontSize: "1.5rem" }}>
              General Inquiries:
            </h3>
            <p style={{ color: "#555555", fontSize: "1rem" }}>
              Email:{" "}
              <a href="mailto:info@farmtocompany.com">info@farmtocompany.com</a>
            </p>
            <p style={{ color: "#555555", fontSize: "1rem" }}>
              Phone: +1 (987) 654-3210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
