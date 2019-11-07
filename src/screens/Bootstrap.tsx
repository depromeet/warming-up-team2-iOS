import React from 'react';
import styled from 'styled-components/native';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { getItem, USER_TOKEN, SKIP_REGIST_CODE } from 'libs/storage';
import { useDispatch } from 'react-redux';

import * as AuthActions from 'store/auth/actions';
import { ScreenWrap } from 'components';
import { SPLASH_IMG } from 'libs/icons';
import { setAuthorization } from 'libs/axios';

const GIFImage = styled.Image.attrs({
  source: SPLASH_IMG,
  resizeMode: 'contain',
})`
  width: 250px;
  height: 250px;
  margin-bottom: 130px;
`;

const Wrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Bootstrap: NavigationStackScreenComponent = ({ navigation }) => {
  const dispatch = useDispatch();
  const checkAuthStatus = async () => {
    const token = await getItem(USER_TOKEN);
    const skip = await getItem(SKIP_REGIST_CODE);

    if (!token) {
      navigation.navigate('Auth');
      return;
    }
    setAuthorization(token);
    dispatch(AuthActions.getMe());

    if (skip === 'true') {
      // navigation.navigate('Home');
      navigation.navigate('RegistCode');
      return;
    }

    navigation.navigate('RegistCode');
  };

  React.useEffect(() => {
    RNBootSplash.hide();

    setTimeout(() => {
      checkAuthStatus();
    }, 2000);
  }, []);

  return (
    <ScreenWrap>
      <Wrap>
        <GIFImage />
      </Wrap>
    </ScreenWrap>
  );
};

export default Bootstrap;
