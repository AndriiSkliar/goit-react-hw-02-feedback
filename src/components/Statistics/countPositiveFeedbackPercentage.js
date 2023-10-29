import { countTotalFeedback } from "./countTotalFeedback"

export const countPositiveFeedbackPercentage = options => {
  const { good } = options;
  const total = countTotalFeedback(options);
  return total > 0 ? `${Math.round((good / total) * 100)}%` : '0%';
}
