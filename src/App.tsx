import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainerComponent } from 'react-navigation';
import { useScreens } from 'react-native-screens';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import store from 'store';
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
    <ActionSheetProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ActionSheetProvider>
  </SafeAreaProvider>
);
