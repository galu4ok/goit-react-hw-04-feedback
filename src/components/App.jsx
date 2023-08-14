import { Component } from 'react';
import { OptionButtons } from './Options/OptionButtons';
import { Section } from './Section/Section';
import { Statistics } from './Statistics.js/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <OptionButtons
            options={Object.keys(this.state)}
            onFeedbackClick={this.handleFeedbackClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
      </>
    );
  }
}
