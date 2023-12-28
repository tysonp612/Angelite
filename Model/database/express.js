// express.js

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "Model/database/.env" });
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
