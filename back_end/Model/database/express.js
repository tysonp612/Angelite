import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: "back_end/.env" });


// Importing routes
import bookingsRouter from "./routes/bookings.js";
import clientRouter from "./routes/client.js";
import servicesRouter from "./routes/services.js";


const app = express();
const PORT = process.env.PORT || 3000;
// Applying server standard
app.use(cors());
app.use(express.json());

// Mounting routes
app.get("/", (req, res) => {
  res.send("welcome from home");
});

app.use("/api/bookings", bookingsRouter);
app.use("/api/client", clientRouter);
app.use("/api/services", servicesRouter);

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


