import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import AnimtedText from './AnimtedText';

const Wrap = styled(Animated.View)<{ width: number; selected: boolean }>`
  height: 100%;
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? '#00aef2' : '#bbbbbb')};
  padding: 0 16px;
  justify-content: space-evenly;
`;

interface Props {
  item: any;
  width: Animated.AnimatedInterpolation;
  selected: boolean;
}

const MonthText = styled(AnimtedText)`
  font-size: 12px;
  color: white;
  font-weight: bold;
`;

const ExpenditureText = styled(AnimtedText)`
  font-size: 18px;
  color: white;
`;

const DurationView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BoldExpenditureText = styled(ExpenditureText)`
  font-weight: bold;
`;

const DurationText = styled(AnimtedText)`
  font-size: 10px;
  color: white;
`;

const TextView = styled.View``;

const MonthSummaryCard: React.FC<Props> = ({ width, item, selected }) => {
  const monthSize = width.interpolate({
    inputRange: [90 * (260 / 128), 260, 280],
    outputRange: [11, 12, 15],
    extrapolate: 'clamp',
  });

  const expenditureSize = width.interpolate({
    inputRange: [90 * (260 / 128), 260, 280],
    outputRange: [12, 20, 24],
    extrapolate: 'clamp',
  });

  const durationSize = width.interpolate({
    inputRange: [90 * (260 / 128), 260, 280],
    outputRange: [8, 11, 14],
    extrapolate: 'clamp',
  });

  const monthLineHeight = width.interpolate({
    inputRange: [90 * (260 / 128), 260, 280],
    outputRange: [24, 24, 28],
    extrapolate: 'clamp',
  });

  const lineHeight = width.interpolate({
    inputRange: [90 * (260 / 128), 260, 280],
    outputRange: [13, 24, 28],
    extrapolate: 'clamp',
  });

  return (
    <Wrap style={{ width }} selected={selected}>
      <MonthText style={{ fontSize: monthSize, lineHeight: monthLineHeight }}>
        {item.month}
      </MonthText>
      <TextView>
        <ExpenditureText style={{ lineHeight, fontSize: expenditureSize }}>
          현재 총
          <BoldExpenditureText
            style={{ lineHeight, fontSize: expenditureSize }}
          >{`${item.expenditure.toLocaleString()}원`}</BoldExpenditureText>
        </ExpenditureText>
        <ExpenditureText style={{ lineHeight, fontSize: expenditureSize }}>
          지출했어요!
        </ExpenditureText>
      </TextView>
      <DurationView>
        <DurationText style={{ fontSize: durationSize }}>
          {item.duration}
        </DurationText>
      </DurationView>
    </Wrap>
  );
};

export default MonthSummaryCard;
