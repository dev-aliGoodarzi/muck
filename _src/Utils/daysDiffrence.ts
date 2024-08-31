export const daysDifference = (start: string, end: string) => {
  const date1: Date = new Date(start);
  const date2: Date = new Date(end);

  const time1: number = date1.getTime();
  const time2: number = date2.getTime();

  const daysDifference: number = (time2 - time1) / (1000 * 60 * 60 * 24) + 1;

  const res: Record<string, string> = {};

  for (let i = 0; i < daysDifference; i++) {
    const currentDate: Date = new Date(date1);
    currentDate.setDate(date1.getDate() + i);

    res[`day${i + 1}`] = currentDate.toDateString();
  }

  return res;
};
