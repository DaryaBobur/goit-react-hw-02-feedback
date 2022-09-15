import PropTypes from 'prop-types';
import {ButtonFeedback} from './FeedbackOptionsStyled'

const FeedbackOptions =({ onLeaveFeedback, options }) => {
  return (
    options.map((btn) => (<ButtonFeedback key={btn} type="button" onClick={()=> onLeaveFeedback(btn)}>{btn}</ButtonFeedback>))
)
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;