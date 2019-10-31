import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import styled from 'styled-components/native';

import * as NavigationService from 'libs/NavigationService';
import colors from 'libs/colors';
import { ScreenWrap, Text, MainButton, SingleLineTextInput } from 'components';
import { IMG_CHA_3, IMG_BG_CHA } from 'libs/icons';
import { DEVICE_WIDTH } from 'libs/styleUtils';

const IMAGE_HEIGHT = DEVICE_WIDTH * 0.5;

const Wrap = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

const BGImage = styled.Image.attrs({ source: IMG_BG_CHA })`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
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
  margin-top: 5%;
  flex-direction: row;
  align-items: center;
  height: 140px;
`;

const Body = styled.View`
  padding: 0 20px;
`;

const StyledSingleLineTextInput = styled(SingleLineTextInput)`
  font-weight: bold;
  margin-bottom: 30px;
`;

const StyledMainButton = styled(MainButton)`
  width: 48%;
`;

const ButtonsView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const RegistCode: NavigationStackScreenComponent = () => {
  const onPressLater = () => {
    NavigationService.navigate('Home');
  };

  return (
    <ScreenWrap forceInset={{ bottom: 'never' }}>
      <KeyboardAwareScrollView
        extraScrollHeight={150}
        scrollEnabled={false}
        keyboardShouldPersistTaps="handled"
      >
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
          <Body>
            <StyledSingleLineTextInput
              isRow
              autoFocus
              title="내 코드"
              onChangeText={() => {}}
              returnKeyType="done"
            />
            <StyledSingleLineTextInput
              isRow
              title="배우자 코드"
              onChangeText={() => {}}
              returnKeyType="done"
            />
            <ButtonsView>
              <StyledMainButton title="나중에 할래요" onPress={onPressLater} />
              <StyledMainButton primary title="시작하기" onPress={() => {}} />
            </ButtonsView>
          </Body>
        </Wrap>
      </KeyboardAwareScrollView>
      <BGImage />
    </ScreenWrap>
  );
};

export default RegistCode;
