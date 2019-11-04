import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from 'screens/Home';
import FirstStepWriting from 'screens/FirstStepWriting';
import SecondStepWriting from 'screens/SecondStepWriting';

import { baseStackNavigationOptions } from './headerOptions';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { header: null },
    },
    FirstStep: {
      screen: FirstStepWriting,
    },
    SecStep: {
      screen: SecondStepWriting,
    },
  },
  {
    headerMode: 'screen',
    defaultNavigationOptions: {
      ...baseStackNavigationOptions,
    },
  },
);

export default HomeNavigator;
