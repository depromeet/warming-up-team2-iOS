import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainerComponent } from 'react-navigation';
import { useScreens } from 'react-native-screens';

import AppNavigator from 'navigatos/AppNavigator';
import { registerAppContainer } from 'libs/NavigationService';

useScreens();

const App = () => {
  const container = React.useRef<NavigationContainerComponent>(null);

  React.useEffect(() => {
    RNBootSplash.hide();
    if (container.current) {
      registerAppContainer(container.current);
      RNBootSplash.hide();
    }
  }, [container.current]);

  return <AppNavigator ref={container} />;
};

export default () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);
