import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from 'screens/Home';
import LoginScren from 'screens/Login';

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScren,
    navigationOptions: { header: null },
  },
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
