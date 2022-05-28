import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div className="Notification">
      <span>{message}</span>
    </div>
  );
};

// class Notification extends Component {
//   render() {
//     const { message } = this.props;
//     return (
//       <div className="Notification">
//         <span>{message}</span>
//       </div>
//     );
//   }
// }

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
