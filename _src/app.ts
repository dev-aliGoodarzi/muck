// Express
import express from "express";
// Express

// Utils
import dotenv from "dotenv";
// Utils

// Routes
import { CalendarRoutes } from "./Routes/Calendar/CalendarRoutes";
// Routes

dotenv.config();

const app = express();

app.use("/calendar", CalendarRoutes);

app.use("*", (_, res) => {
  res.status(200).json({ message: "server is working fine" });
});

app.listen(process.env.PORT, () => {
  console.log(`server runs in ${process.env.PORT}`);
});
