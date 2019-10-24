import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import AnimtedText from './AnimtedText';

const Wrap = styled(Animated.View)<{ width: number }>`
  height: 100%;
  border-radius: 10px;
  background-color: #00aef2;
  padding: 16px;
`;

interface Props {
  item: any;
  width: Animated.AnimatedInterpolation;
}

const MonthText = styled(AnimtedText)`
  font-size: 12px;
  color: white;
  margin-bottom: 8px;
  font-weight: bold;
`;

const ExpenditureText = styled(AnimtedText)`
  font-size: 18px;
  color: white;
`;

const BoldExpenditureText = styled(ExpenditureText)`
  font-weight: bold;
`;

const DurationText = styled(AnimtedText)`
  font-size: 10px;
  color: white;
  margin-top: 8px;
`;

const MonthSummaryCard: React.FC<Props> = ({ width, item }) => {
  const monthSize = width.interpolate({
    inputRange: [90 * (226 / 128), 226, 280],
    outputRange: [9, 12, 15],
    extrapolate: 'clamp',
  });

  const expenditureSize = width.interpolate({
    inputRange: [90 * (226 / 128), 226, 280],
    outputRange: [9, 18, 22],
    extrapolate: 'clamp',
  });

  const durationSize = width.interpolate({
    inputRange: [90 * (226 / 128), 226, 280],
    outputRange: [9, 10, 13],
    extrapolate: 'clamp',
  });

  return (
    <Wrap style={{ width }}>
      <MonthText fontSize={monthSize}>{item.month}</MonthText>
      <ExpenditureText fontSize={expenditureSize}>
        현재 총
        <BoldExpenditureText
          fontSize={expenditureSize}
        >{`${item.expenditure.toLocaleString()}원`}</BoldExpenditureText>
      </ExpenditureText>
      <ExpenditureText fontSize={expenditureSize}>지출했어요</ExpenditureText>
      <DurationText fontSize={durationSize}>{item.duration}</DurationText>
    </Wrap>
  );
};

export default MonthSummaryCard;
