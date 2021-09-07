import "./App.css";
import { useState } from "react";
import Statistics from "./components/statistics/Statistics";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";
import Section from "./components/section/Section";
import Notification from "./components/notification/Notification";

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const onButtonIncrement = (e) => {
    setState((prevState) => {
      return { ...prevState, [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good * 100) / (neutral + bad + good));
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onButtonIncrement={onButtonIncrement}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </div>
  );
};

export default App;
