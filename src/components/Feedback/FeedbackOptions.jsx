export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option =>
      <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>)}
  </>
)


