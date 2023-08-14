export const OptionButtons = ({ options, onFeedbackClick }) => {
  // console.log(options);
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          option={option}
          onClick={() => onFeedbackClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
