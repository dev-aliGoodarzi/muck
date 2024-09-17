"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express
const express_1 = __importDefault(require("express"));
// Express
// Utils
const dotenv_1 = __importDefault(require("dotenv"));
// Utils
// Routes
const CalendarRoutes_1 = require("./Routes/Calendar/CalendarRoutes");
const mongoose_1 = __importDefault(require("mongoose"));
// Routes
dotenv_1.default.config();
const app = (0, express_1.default)();
const currMode = process.env.NODE_ENV === "production" ? "prod" : "dev";
let dbStatus = {
    isConnected: false,
    url: currMode === "prod"
        ? String(process.env.MONGODB_CONNECTION_STRING)
            .split("")
            .splice(0, 10)
            .join("")
        : process.env.MONGODB_CONNECTION_STRING,
    mongoError: "",
};
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/calendar", CalendarRoutes_1.CalendarRoutes);
app.use("*", (_, res) => {
    res.status(200).json({ message: "server is working fine", dbStatus });
});
const mongodbURI = currMode === "dev"
    ? process.env.MONGODB_CONNECTION_STRING_LOCAL
    : process.env.MONGODB_CONNECTION_STRING_PROD;
mongoose_1.default
    .connect(mongodbURI)
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
