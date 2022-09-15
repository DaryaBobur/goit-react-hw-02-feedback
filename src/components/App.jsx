import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

addFeedback = (statistics) => {
  this.setState((prevState) => {
      return {
          [statistics]: prevState[statistics] + 1
      }
  })
}

countTotalFeedback = () => {
  return Object.values(this.state).reduce((total, rating) => total + rating, 0);
 
}

countPositiveFeedbackPercentage = () => {
  const total = Object.values(this.state).reduce((total, rating) => total + rating, 0);
  return Math.round(this.state.good * 100 / total);
}

render() {

  const { good, neutral, bad } = this.state;
  const keysState = Object.keys(this.state);
  const totalFeedback = this.countTotalFeedback();

  return (
    <div>
      
        <Section title="Please leave feedback">

          <FeedbackOptions 
            options={keysState} 
            onLeaveFeedback={this.addFeedback} 
          />
        </Section>

      <Section title="Statistics">
        {!totalFeedback ?  
        <Notification 
          message="There is no feedback!" 
        /> 
        : 
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total ={this.countTotalFeedback()} 
          positivePercentage={this.countPositiveFeedbackPercentage()} 
        />}

      </Section>
    
    </div>
  )}  
};

export default App;