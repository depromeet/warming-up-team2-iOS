import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/Home';

const AppNavigator = createStackNavigator({
  home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
