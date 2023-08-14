export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          option={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
