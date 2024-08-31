// Interfaces
import {
  Activity,
  CalendarWeekData,
  Summary,
  UserMetric,
  Event,
} from "../../Interfaces/Calendar/WeekDataInterface";
// Interfaces

// Utils
import { daysDifference } from "../../Utils/daysDiffrence";
import { randomNumberGenerator } from "./randomNumberGenerator";
// Utils

export const CalendarDataGenerator = (
  start: string,
  end: string
): CalendarWeekData => {
  const days = daysDifference(start, end);
  const activities: Activity[] = [];
  const events: Event[] = [];
  const userMetrics: UserMetric[] = [];
  const summary: Summary = {
    totalTime: 100,
    totalDistance: 100,
    totalTSS: 100,
    totalCalories: 100,
    averageHeartRate: 100,
    totalHeartRate: 100,
    training_metrics: { atl: 1, tsb: 1, ctl: 1 },
    type: {
      x: {
        distance: 122,
        duration: 13,
        tss: 34,
        work: 34,
      },
    },
    totalHeartRateCount: 100,
  };

  for (let i = 0; i < Object.keys(days).length; i++) {
    activities.push({
      id: i,
      workout_type: {
        id: randomNumberGenerator(),
        name: "Bike",
        icon: "icon",
      },
      title: `test workout ${i}`,
      workout_day: `${days[Object.keys(days)[i]]} 00:00:00`,
      workout_date: `${days[Object.keys(days)[i]]}`,
      total_time: randomNumberGenerator(1 ,33),
      tss_actual: randomNumberGenerator(1 ,33),
      tss_planned: randomNumberGenerator(1 ,33),
      total_time_planned: randomNumberGenerator(1 ,33),
      description: `desc ${i}`,
      distance: randomNumberGenerator(1 ,33),
      calories: randomNumberGenerator(1 ,33),
      distance_planned: randomNumberGenerator(1 ,33),
      order_on_day: i,
      is_created_by_athlete: i % 2 === 0,
      structure: [
        {
          begin: 12,
          end: 22,
          length: {
            unit: "km",
            value: 22,
          },
          steps: [
            {
              intensityClass: "",
              length: {
                unit: "km",
                value: 22,
              },
              name: `name ${i}`,
              openDuration: i % 2 === 0,
              targets: [],
              type: "fe",
            },
          ],
          type: "2",
        },
      ],
      comments: i,
    });
  }

  for (let i = 0; i < Object.keys(days).length; i++) {
    events.push({
      id: i,
      user: {
        id: i,
        full_name: `test user ${i}`,
        profile_image: "https://api.vo2.ai/storage/images/1724768172.jpg",
        is_coached: false,
        is_register_completed: true,
        is_mobile_verified: true,
        account_expire_date: "2024-09-17 15:46:00",
        now: "2024-08-28 12:50:21",
      },
      sport_type_id: {
        id: 1,
        name: "cycling",
        persian_name: "دوچرخه سواری",
      },
      atp: "test Data For atp",
      atp_week_id: "test Data For atp_week_id",
      name: "harchi",
      event_date: "2024-07-09 00:00:00",
      description: `desc ${i}`,
      atp_priority: "test Data For atp_priority",
      race_type_duration: "test Data For race_type_duration",
    });
  }

  for (let i = 0; i < Object.keys(days).length; i++) {
    userMetrics.push({
      id: i,
      metric_type_id: 6,
      metric_type_name: "Blood Pressure",
      data_type: "text",
      value: "۱۲/۸",
      unique_code: "a1e3770f-16ef-4a1b-ad21-c9d852d8c412",
      date: "2024-07-23 00:00:00",
      metric_type_items: [`metric_type_items ${i}`],
      item_count: 0,
      workout_date: `${days[Object.keys(days)[i]]}`,
    });
  }

  return { activities, events, userMetrics, summary, start, end };
};
