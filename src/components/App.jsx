import { Component } from "react"
import { countTotalFeedback } from "./Statistics/countTotalFeedback";
import { countPositiveFeedbackPercentage } from "./Statistics/countPositiveFeedbackPercentage";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notificati0n/Notification";
import friends from './data/friends.json';
import { Gallery } from "./Gallery/Gallery";
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
    const statisticsData = [
      { title: "Good", value: good },
      { title: "Neutral", value: neutral },
      { title: "Bad", value: bad },
      { title: "Total", value: totalFeedback },
      { title: "Positive feedback", value: countPositiveFeedbackPercentage(this.state) },
    ];

    return (
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__header">
            <Section title="Please leave feedback">
              <FeedbackOptions
                onLeaveFeedback={this.handleOption}
                options={Object.keys(this.state)}
                friends={friends}
              />
            </Section>
            <Section title="Statistics">
              {totalFeedback > 0
                ? (<Statistics data={statisticsData} />)
                : (<Notification message="There is no feedback" />)
              }
            </Section>
          </div>
          <Gallery friends={friends} />
        </div>
      </div>
    );
  }
};
