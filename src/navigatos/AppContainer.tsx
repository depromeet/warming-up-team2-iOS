import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BootstrapScreen from 'screens/Bootstrap';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import RegistCodeNavigator from './RegistCodeNavigator';

const AppNavigator = createStackNavigator(
  {
    Main: { screen: HomeNavigator },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Bootstrap: BootstrapScreen,
      Home: AppNavigator,
      Auth: AuthNavigator,
      RegistCode: RegistCodeNavigator,
    },
    {
      initialRouteName: 'Bootstrap',
    },
  ),
);

export default AppContainer;
