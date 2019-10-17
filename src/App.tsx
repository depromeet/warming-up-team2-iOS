import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import styled from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Text, ScreenWrap } from './components';

const Wrap = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 2000);
  });

  return (
    <SafeAreaProvider>
      <ScreenWrap>
        <Wrap>
          <Text>BOBO 화이팅</Text>
        </Wrap>
      </ScreenWrap>
    </SafeAreaProvider>
  );
};

export default App;
