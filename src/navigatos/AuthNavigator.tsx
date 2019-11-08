import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from 'screens/Login';
import RegistCodeScreen from 'screens/RegistCode';
import HomeNavigator from './HomeNavigator';
import { baseStackNavigationOptions } from './headerOptions';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    RegistCode: {
      screen: RegistCodeScreen,
    },
    Home: {
      screen: HomeNavigator,
    },
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: null,
      ...baseStackNavigationOptions,
    },
  },
);

export default AuthNavigator;
