import { FeedbackOption } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
  return (
    <div>
      {options.map(option => (
        <FeedbackOption
          key={option}
          option={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackOption>
      ))}
    </div>
  );
};
