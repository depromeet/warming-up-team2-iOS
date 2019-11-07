import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useDispatch } from 'react-redux';
import KakaoLogins, { ITokenInfo } from '@react-native-seoul/kakao-login';
import styled from 'styled-components/native';
import { getItem, SKIP_REGIST_CODE } from 'libs/storage';

import * as AuthActions from 'store/auth/actions';
import * as NavigationService from 'libs/NavigationService';
import colors from 'libs/colors';
import { ScreenWrap, Touchable } from 'components';
import { IMG_LOGIN, IMG_BT_LOGIN, IMG_BG_CHA } from 'libs/icons';
import { DEVICE_WIDTH } from 'libs/styleUtils';

const IMAGE_HEIGHT = DEVICE_WIDTH * 0.5;

const Wrap = styled.View`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

const LoginCenter = styled.Image.attrs({ source: IMG_LOGIN })``;

const LoginBtnImage = styled.Image.attrs({ source: IMG_BT_LOGIN })``;

const LoginButton = styled(Touchable)``;

const BGImage = styled.Image.attrs({ source: IMG_BG_CHA })`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
  opacity: 0.2;
`;

const CenterView = styled.View`
  height: 220px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Login: NavigationStackScreenComponent = () => {
  const dispatch = useDispatch();
  const onPressLogin = () => {
    KakaoLogins.login(async (err?: Error, result?: ITokenInfo) => {
      if (err) {
        console.log('login error', err);
        return;
      }
      if (result) {
        const token = await dispatch(
          AuthActions.requestLogin(result.accessToken),
        );
        const skip = await getItem(SKIP_REGIST_CODE);
        if (token) {
          if (skip === 'true') {
            NavigationService.replace('Home');
            return;
          }
          NavigationService.replace('RegistCode');
        }
      }
    });
  };

  return (
    <ScreenWrap forceInset={{ bottom: 'never' }}>
      <Wrap>
        <CenterView>
          <LoginCenter />
          <LoginButton onPress={onPressLogin}>
            <LoginBtnImage />
          </LoginButton>
        </CenterView>
      </Wrap>
      <BGImage />
    </ScreenWrap>
  );
};

export default Login;
