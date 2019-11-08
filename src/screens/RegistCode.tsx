import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';

import * as AuthActions from 'store/auth/actions';
import * as NavigationService from 'libs/NavigationService';
import { setItem, SKIP_REGIST_CODE } from 'libs/storage';
import colors from 'libs/colors';
import {
  ScreenWrap,
  Text,
  MainButton,
  SingleLineTextInput,
  LoadingCover,
} from 'components';
import { IMG_CHA_3, IMG_BG_CHA } from 'libs/icons';
import { DEVICE_WIDTH } from 'libs/styleUtils';
import { RootReducerType } from 'store';
import { AuthStateType } from 'store/auth/state';

type Dispatch = (action: any) => Promise<any>;

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
  const [spouseCode, setSpouseCode] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const { userInfo } = useSelector<RootReducerType, AuthStateType>(
    state => state.authState,
  );
  const dispatch: Dispatch = useDispatch();
  const onPressLater = () => {
    setItem(SKIP_REGIST_CODE, 'true');
    NavigationService.navigate('Home');
  };
  const onChangeSpouseCode = (text: string) => {
    setSpouseCode(text);
  };
  const onPressDone = async () => {
    setLoading(true);
    const result = await dispatch(AuthActions.requestConnect(spouseCode));
    if (result) {
      setItem(SKIP_REGIST_CODE, 'true');
      NavigationService.navigate('Home');
    }
    setLoading(false);
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
              editable={false}
              isRow
              title="내 코드"
              onChangeText={() => {}}
              returnKeyType="done"
              value={userInfo.connectionCode}
            />
            <StyledSingleLineTextInput
              isRow
              autoFocus
              title="배우자 코드"
              onChangeText={onChangeSpouseCode}
              returnKeyType="done"
            />
            <ButtonsView>
              <StyledMainButton title="나중에 할래요" onPress={onPressLater} />
              <StyledMainButton
                primary
                title="시작하기"
                onPress={onPressDone}
              />
            </ButtonsView>
          </Body>
        </Wrap>
      </KeyboardAwareScrollView>
      <BGImage />
      {loading && <LoadingCover />}
    </ScreenWrap>
  );
};

export default RegistCode;
