import React from 'react';
import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // const { options, onLeaveFeedback } = this.props;
  // const keys = Object.keys(options);
  return (
    <div className={style.Options}>
      {options.map(item => (
        <button
          key={item}
          type="button"
          className={style.Btn}
          name={item}
          onClick={() => onLeaveFeedback(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

// class FeedbackOptions extends Component {
//   render() {
//     const { options, onLeaveFeedback } = this.props;
//     const keys = Object.keys(options);
//     return (
//       <div className={style.Options}>
//         {keys.map(item => (
//           <button
//             key={item}
//             type="button"
//             className={style.Btn}
//             name={item}
//             onClick={() => onLeaveFeedback(item)}
//           >
//             {item}
//           </button>
//         ))}
//       </div>
//     );
//   }
// }

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
