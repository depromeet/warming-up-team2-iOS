import React from 'react';
import styled from 'styled-components/native';
import SafeAreaView, { ForceInsetProp } from 'react-native-safe-area-view';

const Wrap = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

const InnerWrap = styled.View`
  flex: 1;
  background-color: white;
`;

const ScreenWrap: React.FC<{
  children: any;
  forceInset?: ForceInsetProp;
}> = ({ children, forceInset }) => {
  return (
    <Wrap forceInset={forceInset}>
      <InnerWrap>{children}</InnerWrap>
    </Wrap>
  );
};

export default ScreenWrap;
