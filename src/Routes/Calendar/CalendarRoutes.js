"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarRoutes = void 0;
const express_1 = require("express");
const getDataByTimeForCalendar_1 = require("./get/getDataByTimeForCalendar");
const getSportTypes_1 = require("./get/getSportTypes");
exports.CalendarRoutes = (0, express_1.Router)();
exports.CalendarRoutes.get("/getWeekData", getDataByTimeForCalendar_1.getDataByTimeForCalendar);
exports.CalendarRoutes.get("/getSportTypes", getSportTypes_1.getSportTypes);
