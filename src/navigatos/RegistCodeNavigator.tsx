import { createStackNavigator } from 'react-navigation-stack';
import RegistCodeScreen from 'screens/RegistCode';
import { baseStackNavigationOptions } from './headerOptions';

import HomeNavigator from './HomeNavigator';

const RegistCodeNavigator = createStackNavigator(
  {
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
      ...baseStackNavigationOptions,
    },
  },
);

export default RegistCodeNavigator;
