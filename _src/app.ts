// Express
import express from "express";
// Express

// Utils
import dotenv from "dotenv";
// Utils

// Routes
import { CalendarRoutes } from "./Routes/Calendar/CalendarRoutes";
import mongoose from "mongoose";
// Routes

dotenv.config();

const app = express();

const currMode = process.env.NODE_ENV === "production" ? "prod" : "dev";

let dbStatus = {
  isConnected: false,
  url:
    currMode === "prod"
      ? String(process.env.MONGODB_CONNECTION_STRING!)
          .split("")
          .splice(0, 10)
          .join("")
      : process.env.MONGODB_CONNECTION_STRING,
  mongoError: "",
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/calendar", CalendarRoutes);

app.use("*", (_, res) => {
  res.status(200).json({ message: "server is working fine", dbStatus });
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING!)
  .then(() => {
    console.log("connected to database");
    dbStatus.isConnected = true;
  })
  .catch((err) => {
    console.log(err);
    dbStatus.isConnected = false;
    dbStatus.mongoError = JSON.stringify(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`server runs in ${process.env.PORT}`);
});
