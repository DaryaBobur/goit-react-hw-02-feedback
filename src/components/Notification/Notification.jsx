import PropTypes from 'prop-types';
import { NotificationMessage } from './NotificationStyled';

const Notification = ({message}) => {
  return (
    <NotificationMessage>{message}</NotificationMessage>
)
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;