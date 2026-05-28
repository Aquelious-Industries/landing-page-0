import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const InquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: String,
    email: { type: String, required: true },
    message: { type: String, required: true },
    source: { type: String, default: "Aquelious Express API" },
  },
  { timestamps: true }
);

const Inquiry = mongoose.models.Inquiry || mongoose.model("Inquiry", InquirySchema);

app.get("/health", (_, res) => {
  res.json({ ok: true, service: "Aquelious Express API" });
});

app.post("/api/contact", async (req, res) => {
  try {
    if (!process.env.MONGODB_URI) {
      return res.status(500).json({ ok: false, error: "MONGODB_URI is missing." });
    }

    await mongoose.connect(process.env.MONGODB_URI);
    const inquiry = await Inquiry.create(req.body);

    res.status(201).json({ ok: true, inquiryId: inquiry._id.toString() });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
});

const port = process.env.EXPRESS_PORT || 5050;
app.listen(port, () => console.log(`Aquelious Express API running on port ${port}`));
