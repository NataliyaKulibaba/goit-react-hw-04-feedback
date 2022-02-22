import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from './Notification/Notification';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = bad + neutral + good;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback
      ? Math.round((good / countTotalFeedback()) * 100)
      : '0';
  };

  return (
    <>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default Feedback;
