import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import styled from 'styled-components/native';

import * as NavigationService from 'libs/NavigationService';
import colors from 'libs/colors';
import { ScreenWrap, Text, MainButton, SingleLineTextInput } from 'components';

const Wrap = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
  padding: 20px;
`;

const TextView = styled.View`
  margin-bottom: 32px;
`;

const BottomButton = styled(MainButton)`
  position: absolute;
  height: 48px;
  bottom: 60px;
  left: 20px;
  right: 20px;
`;

const StyledSingleLineTextInput = styled(SingleLineTextInput)`
  margin-top: 20px;
`;

const FirstStepWriting: NavigationStackScreenComponent = () => {
  const onPressNext = () => {
    NavigationService.navigate('SecStep');
  };

  return (
    <ScreenWrap>
      <Wrap>
        <TextView>
          <StyledSingleLineTextInput
            placeholder="내역"
            onChangeText={() => {}}
            title="어느곳에 지출하셨나요"
            tailText="에 지출"
            returnKeyType="done"
          />
        </TextView>
        <TextView>
          <StyledSingleLineTextInput
            placeholder="0"
            onChangeText={() => {}}
            title="얼마를 지출하셨나요"
            tailText="원"
            returnKeyType="done"
            keyboardType="numeric"
          />
        </TextView>
      </Wrap>
      <BottomButton onPress={onPressNext} title="다음" primary />
    </ScreenWrap>
  );
};

export default FirstStepWriting;
