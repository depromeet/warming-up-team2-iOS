import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from 'screens/Home';
import { baseStackNavigationOptions } from './headerOptions';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { header: null },
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
