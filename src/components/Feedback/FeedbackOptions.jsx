import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttons}>
    {options.map(option =>
      <button key={option} className={css.button} onClick={() => onLeaveFeedback(option)}>{option}</button>)}
  </div>
)
