import "./App.css";
import { Component } from "react";
import Statistics from "./components/statistics/Statistics";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";
import Section from "./components/section/Section";
import Notification from "./components/notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonIncrement = (e) => {
    this.setState((prevState) => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good * 100) /
        (this.state.neutral + this.state.bad + this.state.good)
    );
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onButtonIncrement={this.onButtonIncrement}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.state.good || this.state.neutral || this.state.bad === true ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
