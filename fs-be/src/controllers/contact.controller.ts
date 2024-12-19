import { Request, Response } from "express";
import { Contact } from "../models/contact.model";

export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact form submitted successfully." });
  } catch (error: unknown) {
    if (error instanceof Error) {
      // TypeScript now knows that 'error' is an instance of Error
      res.status(500).json({ error: error.message });
    } else {
      // For any other unknown error types
      res.status(500).json({ error: "An unknown error occurred." });
    }
  }
};
