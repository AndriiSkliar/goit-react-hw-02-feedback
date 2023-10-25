export const countTotalFeedback = options => {
  const values = Object.values(options);
  const total = values.reduce((value, number) => value + number, 0);
  return total;
}
