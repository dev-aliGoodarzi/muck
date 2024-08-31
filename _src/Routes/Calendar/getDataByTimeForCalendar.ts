// Express
import { Router } from "express";
import { T_Errors } from "../../Interfaces/Common/CommonInterfaces";
import { checkIsNull } from "../../Utils/checkIsNull";
import { CalendarDataGenerator } from "../../Generator/Calendar/CalendarDataGenerator";
// Express

export const getDataByTimeForCalendar = Router();

getDataByTimeForCalendar.get("/getWeekData", (req, res) => {
  const errors: T_Errors = {};
  const { start, end } = req.query as Record<string, string>;

  checkIsNull(
    start,
    "string",
    {
      errorKey: "start",
      errorMessage: "start is not sent !",
    },
    (errData, errKey) => {
      errors[errKey] = errData;
    }
  );

  checkIsNull(
    end,
    "string",
    {
      errorKey: "end",
      errorMessage: "end is not sent !",
    },
    (errData, errKey) => {
      errors[errKey] = errData;
    }
  );

  if (Object.keys(errors).length > 0) {
    res.status(400).send({
      errors,
    });
    return;
  }

  const data = CalendarDataGenerator(start, end);

  res.status(200).send({ data });
});
