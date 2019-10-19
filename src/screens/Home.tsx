import React from 'react';
import styled from 'styled-components/native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import colors from 'libs/colors';
import { ScreenWrap, Text } from 'components';

const Wrap = styled.View`
  flex: 1;
  background-color: ${colors.black};
  justify-content: center;
  align-items: center;
`;

const HomeText = styled(Text)`
  color: white;
`;

export const Home: NavigationStackScreenComponent = () => {
  return (
    <ScreenWrap>
      <Wrap>
        <HomeText>Home</HomeText>
      </Wrap>
    </ScreenWrap>
  );
};

export default Home;
