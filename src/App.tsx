import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainerComponent } from 'react-navigation';
import { useScreens } from 'react-native-screens';

import AppContainer from 'navigatos/AppContainer';
import { registerAppContainer } from 'libs/NavigationService';

useScreens();

const App = () => {
  const container = React.useRef<NavigationContainerComponent>(null);

  React.useEffect(() => {
    if (container.current) {
      registerAppContainer(container.current);
    }
  }, [container.current]);

  return <AppContainer ref={container} />;
};

export default () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
);
