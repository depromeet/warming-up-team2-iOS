import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const Bootstrap: NavigationStackScreenComponent = ({ navigation }) => {
  React.useEffect(() => {
    // 로그인 및 코드 등록 완료
    navigation.navigate('Auth');
    // 로그인 안됨
    // navigation.navigate('Login');
    // 로그인은 했는데 코드 등록 안했을 떄
    navigation.navigate('RegistCode');

    setTimeout(() => {
      RNBootSplash.hide();
    }, 1500);
  });

  return null;
};

export default Bootstrap;
