import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import styled from 'styled-components/native';

import * as NavigationService from 'libs/NavigationService';
import colors from 'libs/colors';
import { ScreenWrap, Text, MainButton } from 'components';

const Wrap = styled.View`
  flex: 1;
  background-color: ${colors.white};
  padding: 20px;
  justify-content: center;
`;

const MainText = styled(Text)``;

const BottomButton = styled(MainButton)`
  position: absolute;
  height: 48px;
  bottom: 60px;
  left: 20px;
  right: 20px;
`;

const FirstStepWriting: NavigationStackScreenComponent = () => {
  const onPressNext = () => {
    NavigationService.navigate('SecStep');
  };

  return (
    <ScreenWrap>
      <Wrap>
        <MainText>STEP1</MainText>
        <BottomButton onPress={onPressNext} title="다음" primary />
      </Wrap>
    </ScreenWrap>
  );
};

export default FirstStepWriting;
