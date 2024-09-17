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
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/calendar", CalendarRoutes_1.CalendarRoutes);
app.use("*", (_, res) => {
    res.status(200).json({ message: "server is working fine" });
});
mongoose_1.default
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => {
    console.log("connected to database");
})
    .catch((err) => {
    console.log(err);
});
app.listen(process.env.PORT, () => {
    console.log(`server runs in ${process.env.PORT}`);
});
