import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import KakaoLogins, { ITokenInfo } from '@react-native-seoul/kakao-login';
import styled from 'styled-components/native';

import * as NavigationService from 'libs/NavigationService';
import colors from 'libs/colors';
import { ScreenWrap, Text, Touchable } from 'components';

const Wrap = styled.View`
  flex: 1;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled(Touchable)``;

const Login: NavigationStackScreenComponent = () => {
  const onPressLogin = () => {
    // KakaoLogins.login((err?: Error, result?: ITokenInfo) => {
    //   if (err) {
    //     console.log('login error', err);
    //     return;
    //   }
    //   if (result) console.log('token', result);
    // });
    NavigationService.replace('Home');
  };

  return (
    <ScreenWrap>
      <Wrap>
        <LoginButton onPress={onPressLogin}>
          <Text>로그인하기</Text>
        </LoginButton>
      </Wrap>
    </ScreenWrap>
  );
};

export default Login;
