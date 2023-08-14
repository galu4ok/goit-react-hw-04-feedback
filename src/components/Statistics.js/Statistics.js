import { Text, SpanText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <Text>
        Good: <SpanText>{good}</SpanText>
      </Text>
      <Text>
        Neutral:<SpanText>{neutral}</SpanText>{' '}
      </Text>
      <Text>
        Bad: <SpanText>{bad}</SpanText>
      </Text>
      <Text>
        Total: <SpanText>{total}</SpanText>
      </Text>
      <Text>
        Positive feedback: <SpanText>{positivePercentage}</SpanText>
      </Text>
    </div>
  );
};
