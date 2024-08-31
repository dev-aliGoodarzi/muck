export const randomNumberGenerator = (
  start: number = 1,
  end: number = 50
): number => {
  return Math.floor(Math.random() * (end - start + 1)) + start;
};
