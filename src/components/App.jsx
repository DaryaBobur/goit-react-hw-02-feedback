import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FedbackOptions';




class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

handleClick = (key) => {
  this.setState(prevState => {
    return {
      [key]: prevState[key] + 1 
    }
  })

}

addRating = () => {
this.setState(prevState => {
  return {
    good: prevState.good + 1,
  }

})
}

countTotalFeedback() {
return Object.values(this.state).reduce((total, rating) => total + rating, 0);
 
}

countPositiveFeedbackPercentage() {
  const total = Object.values(this.state).reduce((total, rating) => total + rating, 0);
  return Math.round(this.state.good * 100 / total);
}

render() {
  const { good, neutral, bad } = this.state;
  return (

    
    <div>
    <h2>Please leave feedback</h2>


      {/* {Object.keys(this.state).map((key) => ( */}
      <FeedbackOptions key={this.props.state} options={this.handleClick} onLeaveFeedback={this.props.addRating} />
      {/* // <button key={key} type="button" onClick={() => this.handleClick(key)} className={this.props.addRating}>{key}</button> */}
      {/* ))} */}


    

    <Statistics 
    good={good} 
    neutral={neutral} 
    bad={bad} 
    total ={this.countTotalFeedback()} 
    positivePercentage={this.countPositiveFeedbackPercentage()} 
    />
    </div>
  )}

  
};

export default App;