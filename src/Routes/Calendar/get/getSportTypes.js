"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSportTypes = void 0;
const express_1 = require("express");
exports.getSportTypes = (0, express_1.Router)();
exports.getSportTypes.get("/getWeekData", (req, res) => {
    res.status(200).send({
        data: {}
    });
});
