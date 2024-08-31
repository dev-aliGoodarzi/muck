import {
  T_CalendarSportType,
  T_SportTypes,
} from "../Types/Calendar/CalendarTypes";

export const sportTypes: Record<
  T_SportTypes,
  T_CalendarSportType<T_SportTypes>
> = {
  bike: {
    id: "1",
    key: "bike",
    title: "دوچرخه",
    iconUrl: "",
  },
  running: {
    id: "2",
    key: "running",
    title: "دوچرخه",
    iconUrl: "",
  },
};
