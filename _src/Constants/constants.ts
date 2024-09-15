import { UserMetric } from "../Interfaces/Calendar/WeekDataInterface";
import { WorkoutDetailInterface } from "../Interfaces/Workouts/WorkoutsInterface";
import {
  T_CalendarSportType,
  T_SportTypes,
} from "../Types/Calendar/CalendarTypes";
import { daysDifference } from "../Utils/daysDiffrence";

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



// export const workouts: WorkoutDetailInterface[] = [
//   {
//     id: 0,
//     user: {
//       id: 1,
//       full_name: "ali goodarzi",
//       profile_image: "",
//       is_coached: false,
//       is_register_completed: true,
//       is_mobile_verified: true,
//       account_expire_date: "2025-01-01",
//       now: String(daysDifference(Date.now().toString(), Date.now().toString())),
//     },
//     title: "",
//     workout_type: { icon: "", id: 1, name: "یک ورک اوت" },
//     workout_day: "1",
//     files: [],
//     tss_planned: 10,
//     if_planned: 10,
//     start_time_planned: 10,
//     calories_planned: 10,
//     total_time_planned: 10,
//     distance_planned: 10,
//     order_on_plan: 10,
//     order_on_day: 10,
//     description: 10,
//     structure: [],
//     comments: [],
//     code: "code",
//     tags: [],
//     distance: 10,
//     work: 10,
//     calories: 10,
//     elapsed_time: 10,
//     time_stamp: 10,
//     workout_day_en: 10,
//     total_ascent: 10,
//     total_descent: 10,
//     completed: 10,
//     total_time: 10,
//     tss_actual: 10,
//     if_actual: 10,
//     power_average: 10,
//     fit_file: 10,
//     feeling: 10,
//     rpe: 10,
//     np: 10,
//     ctl: 10,
//     atl: 10,
//     tsb: 10,
//     max_cadence: 10,
//     min_cadence: 10,
//     avg_cadence: 10,
//     heart_rate_average: 10,
//     heart_rate_maximum: 10,
//     heart_rate_minimum: 10,
//   },
// ];
