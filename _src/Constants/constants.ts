import { UserMetric } from "../Interfaces/Calendar/WeekDataInterface";
import {
  T_CalendarSportType,
  T_SportTypes,
} from "../Types/Calendar/CalendarTypes";

export const sportTypes: Record<T_SportTypes, T_CalendarSportType> = {
  bike: {
    id: "1",
    key: "bike",
    title: "دوچرخه",
    iconUrl: "https://picsum.photos/16",
  },
  running: {
    id: "2",
    key: "running",
    title: "دویدن",
    iconUrl: "https://picsum.photos/16",
  },
};

export const metricType: (i: number, day: string) => UserMetric = (i, day) => ({
  id: i,
  metric_type_id: "1",
  metric_type_name: "metric 1",
  metricIcon: "https://picsum.photos/16",
  data_type: "string",
  value: "veww",
  unique_code: i + "2t2",
  date: day,
  workout_date: day,
  metric_type_items: ["metric " + i],
  item_count: "32",
});
