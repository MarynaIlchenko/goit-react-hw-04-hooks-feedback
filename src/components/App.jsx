import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerOnClick = key => {
    return this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total <= 0) {
      return 0;
    }
    return Math.floor((this.state.good * 100) / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handlerOnClick}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
