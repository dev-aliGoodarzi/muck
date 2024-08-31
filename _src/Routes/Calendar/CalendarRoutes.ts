import { Router } from "express";
import { getDataByTimeForCalendar } from "./getDataByTimeForCalendar";

export const CalendarRoutes = Router();

CalendarRoutes.get("/getWeekData", getDataByTimeForCalendar);
