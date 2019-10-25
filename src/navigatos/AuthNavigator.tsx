import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from 'screens/Login';
import { baseStackNavigationOptions } from './headerOptions';

import HomeNavigator from './HomeNavigator';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
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
