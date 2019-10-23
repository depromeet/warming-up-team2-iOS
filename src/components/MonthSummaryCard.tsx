import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

const Wrap = styled(Animated.View)<{ width: number }>`
  height: 100%;
  border-radius: 10px;
  background-color: #00aef2;
`;

interface Props {
  item: any;
  width: Animated.AnimatedInterpolation;
}

const MonthSummaryCard: React.FC<Props> = ({ width, item }) => {
  return <Wrap style={{ width }} />;
};

export default MonthSummaryCard;
