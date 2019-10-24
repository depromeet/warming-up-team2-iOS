import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from 'screens/Home';
import LoginScren from 'screens/Login';
import {
  mainScreenNavigationOptions,
  baseStackNavigationOptions,
} from './headerOptions';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScren,
      navigationOptions: { header: null },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: mainScreenNavigationOptions,
    },
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      ...baseStackNavigationOptions,
    },
  },
);

export default createAppContainer(AppNavigator);
