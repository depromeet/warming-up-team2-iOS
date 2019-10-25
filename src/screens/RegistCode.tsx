import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import styled from 'styled-components/native';

import * as NavigationService from 'libs/NavigationService';
import colors from 'libs/colors';
import { ScreenWrap, Text, Touchable } from 'components';
import { IMG_CHA_3 } from 'libs/icons';

const Wrap = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

const TextView = styled.View``;

const TtitleText = styled(Text)`
  font-size: 15px;
`;

const TtitleTextBold = styled(TtitleText)`
  font-weight: bold;
`;

const CHA3Image = styled.Image.attrs({ source: IMG_CHA_3 })`
  width: 60px;
  height: 80px;
  margin-right: 4px;
`;

const Header = styled.View`
  margin-top: 13%;
  flex-direction: row;
  align-items: center;
  height: 140px;
`;

const RegistCode: NavigationStackScreenComponent = () => {
  return (
    <ScreenWrap>
      <Wrap>
        <Header>
          <CHA3Image />
          <TextView>
            <TtitleText>
              <TtitleTextBold>배우자 코드</TtitleTextBold>를 입력하고
            </TtitleText>
            <TtitleText>함께 가계부를 써봐요!</TtitleText>
          </TextView>
        </Header>
      </Wrap>
    </ScreenWrap>
  );
};

export default RegistCode;
