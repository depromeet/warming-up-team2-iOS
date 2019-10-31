import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import styled from 'styled-components/native';

import colors from 'libs/colors';
import { ScreenWrap, Text } from 'components';

const Wrap = styled.View`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

const MainText = styled(Text)``;

const SecondStepWriting: NavigationStackScreenComponent = () => {
  return (
    <ScreenWrap>
      <Wrap>
        <MainText>STEP2</MainText>
      </Wrap>
    </ScreenWrap>
  );
};

export default SecondStepWriting;
