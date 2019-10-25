import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { IC_CALENDAR } from 'libs/icons';
import AnimtedText from './AnimtedText';
import Touchable from './Touchable';

const Wrap = styled(Animated.View)<{ width: number }>`
  height: 100%;
  border-radius: 10px;
  background-color: #00aef2;
  padding: 0 16px;
  justify-content: space-evenly;
`;

interface Props {
  item: any;
  width: Animated.AnimatedInterpolation;
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

const CalendarButton = styled(Touchable)``;

const CalendarImage = styled.Image.attrs({ source: IC_CALENDAR })``;

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
    outputRange: [5, 10, 13],
    extrapolate: 'clamp',
  });

  const monthLineHeight = width.interpolate({
    inputRange: [90 * (226 / 128), 226, 280],
    outputRange: [24, 24, 28],
    extrapolate: 'clamp',
  });

  const lineHeight = width.interpolate({
    inputRange: [90 * (226 / 128), 226, 280],
    outputRange: [13, 24, 28],
    extrapolate: 'clamp',
  });

  return (
    <Wrap style={{ width }}>
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
        <CalendarButton onPress={() => {}}>
          <CalendarImage />
        </CalendarButton>
      </DurationView>
    </Wrap>
  );
};

export default MonthSummaryCard;
