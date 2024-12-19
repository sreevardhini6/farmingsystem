import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbURI = process.env.MONGO_URI || "mongodb+srv://sreevardhini:password123sree@cluster0.uzzk0tp.mongodb.net/farmingsystem"; // Replace with your DB URI
    await mongoose.connect(dbURI, {});
    console.log("MongoDB connected successfully.");
  } catch (error) {
    // Ensure error is of type Error before accessing its message
    if (error instanceof Error) {
      console.error("Error connecting to MongoDB:", error.message);
    } else {
      console.error("An unknown error occurred during MongoDB connection:", error);
    }
    process.exit(1); // Exit process with failure
  }
};
