import {
  T_CalendarSportType,
  T_SportTypes,
} from "../../Types/Calendar/CalendarTypes";

export interface CalendarWeekData {
  start: string;
  end: string;
  activities: Activity[];
  events: Event[];
  userMetrics: UserMetric[];
  summary: Summary;
}

export interface Activity {
  id: number;
  workout_type: T_CalendarSportType;
  title: string;
  workout_day: string;
  total_time: number;
  tss_actual: number;
  tss_planned: number;
  total_time_planned: number;

  // just send date here // ex : 2021-12-22
  workout_date: string;
  // just send date here // ex : 2021-12-22

  description: string;
  distance: number;
  calories: number;
  distance_planned: number;
  order_on_day: null | number;
  is_created_by_athlete: boolean;
  structure: Structure[] | null;
  comments: number;

  css: {
    topColor: string;
    mainBgColor: string;
    mainTextColor: string;
    slaveTextColor: string;
  };

  reaction: {
    reactionType: number | string;
    reactionNumber: number;
    reactionIcon: string;
  };
}

interface Structure {
  type: string;
  length: Length;
  steps: Step[];
  begin: number;
  end: number;
}

interface Length {
  value: number;
  unit: string;
}

interface Step {
  type?: string;
  name: string;
  length: Length;
  targets: Target[];
  intensityClass: string;
  openDuration: boolean;
}

interface Target {
  minValue: number;
  maxValue: number;
  unit?: string;
}

export interface Event {
  id: number;
  user: User;
  sport_type_id: SportType;
  atp: string | null;
  atp_week_id: string | null;
  name: string;
  event_date: string;
  description: string | null | string;
  atp_priority: string | null;
  race_type_duration: string | null;
}

interface User {
  id: number;
  full_name: string;
  profile_image: string;
  is_coached: boolean;
  is_register_completed: boolean;
  is_mobile_verified: boolean;
  account_expire_date: string;
  now: string;
}

interface SportType {
  id: number;
  name: string;
  persian_name: string;
  sportIcon: string;
}

export interface UserMetric {
  id: number | string;
  metric_type_id: number | string;
  metric_type_name: string;
  metricIcon: string;
  data_type: string;
  value: string;
  unique_code: string;
  date: string;
  // just send date here // ex : 2021-12-22
  workout_date: string;
  // just send date here // ex : 2021-12-22
  metric_type_items: string[] | null;
  item_count: number | string;
}

export interface Summary {
  total: {
    totalHeartRateCount: number;

    time: number;
    distance: number;
    TSS: number;
    calories: number;
    heartRate: number;
  };

  desired: {
    time: number;
    distance: number;
    TSS: number;
    calories: number;
    heartRate: number;
  };

  avg: {
    averageHeartRate: number;
  };
  training_metrics: TrainingMetrics;
  type: SummaryType;

  extraDuration?: {
    [key: string]: {
      total: {
        duration: number;
        tss: number;
        calories: number;
      };
      desired: {
        duration: number;
        tss: number;
        calories: number;
      };
    };
  };
}

interface TrainingMetrics {
  ctl: number;
  atl: number;
  tsb: number;
}

interface SummaryType {
  x: X;
}

interface X {
  duration: number;
  distance: number;
  tss: number;
  work: number;
}
