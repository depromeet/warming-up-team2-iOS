import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from 'screens/Home';
import {
  mainScreenNavigationOptions,
  baseStackNavigationOptions,
} from './headerOptions';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: mainScreenNavigationOptions,
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
