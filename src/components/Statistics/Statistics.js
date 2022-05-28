import React from 'react';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <ul className={style.Statistics}>
      <li className={style.ListItem}>Good: {good}</li>
      <li className={style.ListItem}>Neutral: {neutral}</li>
      <li className={style.ListItem}>Bad: {bad}</li>
      <li className={style.ListItem}>Total: {total}</li>
      <li className={style.ListItem}>
        Positive feedback: {positivePercentage} %
      </li>
    </ul>
  );
};

Statistics.defaultProps = {
  stats: {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  },
};

// class Statistics extends Component {
//   static defaultProp = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positivePercentage: 0,
//   };
//   render() {
//     const entries = Object.entries(this.props);
//     return (
//       <div className={style.Statistics}>
//         {entries.map(([key, value]) => (
//           <p key={key}>
//             <span>
//               {key === 'positivePercentage' ? 'Positive feedback' : key} :{' '}
//             </span>
//             <span>
//               {Math.round(value)}
//               {key === 'positivePercentage' && '%'}
//             </span>
//           </p>
//         ))}
//       </div>
//     );
//   }
// }

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
