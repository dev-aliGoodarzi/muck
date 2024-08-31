export type T_SportTypes = "bike" | "running";

export type T_CalendarSportType<T extends string> = {
  title: string;
  id: string;
  key: T_SportTypes;
  iconUrl: string;
};
