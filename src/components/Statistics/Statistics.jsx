const Statistics = ({ good, neutral, bad, countTotalFeedback, total, countPositiveFeedbackPercentage, positivePercentage }) => {
return (
<div>
  <h2>Statistics</h2>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li className={countTotalFeedback}>Total: {total}</li>
      <li className={countPositiveFeedbackPercentage}>Positive feedback: {positivePercentage} %</li>
    </ul>
</div>
)}

export default Statistics;