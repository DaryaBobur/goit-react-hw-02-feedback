import PropTypes from 'prop-types';

const FeedbackOptions =({ onLeaveFeedback, options }) => {
return (
 options.map((btn) => (<button key={btn} type="button" onClick={()=> onLeaveFeedback(btn)}>{btn}</button>))
)
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;