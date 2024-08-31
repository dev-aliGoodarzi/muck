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
// Routes
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use("/calendar", CalendarRoutes_1.CalendarRoutes);
app.use("*", (_, res) => {
    res.status(200).json({ message: "server is working fine" });
});
app.listen(process.env.PORT, () => {
    console.log(`server runs in ${process.env.PORT}`);
});
