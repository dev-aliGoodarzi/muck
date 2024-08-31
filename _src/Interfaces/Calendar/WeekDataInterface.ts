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
  workout_type: WorkoutType;
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
}

interface WorkoutType {
  id: number;
  name: string;
  icon: string;
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
}

export interface UserMetric {
  id: number;
  metric_type_id: number;
  metric_type_name: string;
  data_type: string;
  value: string;
  unique_code: string;
  date: string;
  // just send date here // ex : 2021-12-22
  workout_date: string;
  // just send date here // ex : 2021-12-22
  metric_type_items: string[] | null;
  item_count: number;
}

export interface Summary {
  totalTime: number;
  totalDistance: number;
  totalTSS: number;
  totalCalories: number;
  averageHeartRate: number;
  totalHeartRate: number;
  training_metrics: TrainingMetrics;
  type: SummaryType;
  totalHeartRateCount: number;
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
