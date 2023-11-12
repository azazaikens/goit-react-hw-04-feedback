import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsArray = Object.keys(options);
  return (
    <div style={{
      display: 'flex',
      gap: '20px',

    }}>
      {optionsArray.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
      {/* <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '40px'
        }}
      >
        <li>
          <button
            name="good"
            type="button"
            onClick={() => onLeaveFeedback('good')}
          >
            Good
          </button>
        </li>
        <li>
          <button
            name="neutral"
            type="button"
            onClick={() => onLeaveFeedback('neutral')}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            name="bad"
            type="button"
            onClick={() => onLeaveFeedback('bad')}
          >
            Bad
          </button>
        </li>
      </ul> */}
    </div>
  );
};

export { FeedbackOptions };
