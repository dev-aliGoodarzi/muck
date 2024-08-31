import { Router } from "express";
import { getDataByTimeForCalendar } from "./get/getDataByTimeForCalendar";
import { getSportTypes } from "./get/getSportTypes";

export const CalendarRoutes = Router();

CalendarRoutes.get("/getWeekData", getDataByTimeForCalendar);
CalendarRoutes.get("/getSportTypes", getSportTypes);
