import React from 'react';
import styled from 'styled-components/native';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

import { ScreenWrap } from 'components';
import { SPLASH_IMG } from 'libs/icons';

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
  React.useEffect(() => {
    RNBootSplash.hide();
    // 로그인 및 코드 등록 완료
    // navigation.navigate('Auth');
    // 로그인 안됨

    // 로그인은 했는데 코드 등록 안했을 떄
    setTimeout(() => {
      // navigation.navigate('Login');
      navigation.navigate('Home');
    }, 1700);
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
