import { Component } from "react"
import { Section } from "./Feedback/Section";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Statistics } from "./Feedback/Statistics";
import { countTotalFeedback } from "./Feedback/countTotalFeedback";
import { countPositiveFeedbackPercentage } from "./Feedback/countPositiveFeedbackPercentage";
import { Notification } from "./Feedback/Notification";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleOption = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
  });}

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = countTotalFeedback(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleOption}
            options={Object.keys(this.state)}
          />
        </Section>
         <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
};
