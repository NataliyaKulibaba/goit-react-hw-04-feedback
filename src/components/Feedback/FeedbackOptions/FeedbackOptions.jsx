import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.btnList}>
      {options.map(item => (
        <li key={item}>
          <button
            type="button"
            name={item}
            className={s.btn}
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
