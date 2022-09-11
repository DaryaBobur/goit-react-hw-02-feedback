import { Component } from 'react';

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

  return (
    <>
    <h2>Please leave feedback</h2>

      <div>
      {Object.keys(this.state).map(key => (<button key={key} type="button" onClick={() => this.handleClick(key)} className={this.props.addRating}>{key}</button>
      ))}
    </div>

    <h2>Statistics</h2>
    <ul>
      <li>Good:{this.state.good}</li>
      <li>Neutral:{this.state.neutral}</li>
      <li>Bad:{this.state.bad}</li>
      <li>Total:{this.countTotalFeedback()}</li>
      <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
    </ul>
    </>
  )}

  
};

export default App;