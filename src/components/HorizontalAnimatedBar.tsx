import * as Animatable from 'react-native-animatable';
import React from 'react';

import { View } from 'react-native';
import styled from 'styled-components/native';
import { Bar } from 'react-native-progress';

import Text from './Text';

interface Props {
  expeditures: number[];
}

const AniComponent = Animatable.createAnimatableComponent(View);

const Wrap = styled.View`
  padding: 20px;
`;

const HorizontalWrap = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

const InnerView = styled.View`
  justify-content: center;
  left: -10px;
  z-index: -100;
`;

const BubbleView = styled(AniComponent)<{ right: number }>`
  background-color: #ff7443;
  border-radius: 35px;
  padding: 4px 5px;
  position: absolute;
  right: ${({ right }) => right};
  justify-content: center;
  align-items: center;
`;

const BubbleText = styled(Text)`
  color: white;
  font-size: 12px;
`;

const Triangle = styled.View`
  position: absolute;
  width: 0;
  height: 0;
  background-color: transparent;
  border-left-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 14px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #ff7443;
  bottom: -10px;
  transform: rotate(180deg);
`;

const Title = styled(Text)<{ bold?: boolean }>`
  font-size: 12px;
  color: #454545;
  width: 90px;
  background-color: white;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

const HorizontalAnimatedBar: React.FC<Props> = ({ expeditures }) => {
  const [progress, setProgress] = React.useState(0);
  const [bubbleVisible, setBubbleVisigle] = React.useState(false);

  React.useEffect(() => {
    setProgress(1);
    setTimeout(() => {
      setBubbleVisigle(true);
    }, 1500);
  }, []);

  return (
    <Wrap>
      <BubbleView right={80} animation="fadeIn" delay={500}>
        <BubbleText>-100,000원</BubbleText>
        <Triangle />
      </BubbleView>

      {expeditures.map((exp: number, index: number) => (
        <HorizontalWrap key={`$육아용품 - ${exp}`}>
          <Title>육아용품</Title>
          <InnerView>
            <Bar
              useNativeDriver
              animated
              progress={progress}
              width={exp}
              unfilledColor="white"
              color={index === 0 ? '#00aef2' : '#d3d3d3'}
              height={14}
              borderWidth={0}
              borderRadius={8}
            />
          </InnerView>
        </HorizontalWrap>
      ))}
    </Wrap>
  );
};

export default HorizontalAnimatedBar;
