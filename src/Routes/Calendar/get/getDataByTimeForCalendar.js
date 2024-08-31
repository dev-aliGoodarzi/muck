"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataByTimeForCalendar = void 0;
// Express
const express_1 = require("express");
const checkIsNull_1 = require("../../../Utils/checkIsNull");
const CalendarDataGenerator_1 = require("../../../Generator/Calendar/CalendarDataGenerator");
// Express
exports.getDataByTimeForCalendar = (0, express_1.Router)();
exports.getDataByTimeForCalendar.get("/getWeekData", (req, res) => {
    const errors = {};
    const { start, end } = req.query;
    (0, checkIsNull_1.checkIsNull)(start, "string", {
        errorKey: "start",
        errorMessage: "start is not sent !",
    }, (errData, errKey) => {
        errors[errKey] = errData;
    });
    (0, checkIsNull_1.checkIsNull)(end, "string", {
        errorKey: "end",
        errorMessage: "end is not sent !",
    }, (errData, errKey) => {
        errors[errKey] = errData;
    });
    if (Object.keys(errors).length > 0) {
        res.status(400).send({
            errors,
        });
        return;
    }
    const data = (0, CalendarDataGenerator_1.CalendarDataGenerator)(start, end);
    res.status(200).send({ data });
});
