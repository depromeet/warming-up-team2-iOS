import React from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const LOADING = require('lotties/loading.json');

const Wrap = styled.View`
  background-color: rgba(49, 49, 49, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  justify-content: center;
  align-items: center;
`;

const LoadingCover = () => {
  return (
    <Wrap>
      <LottieView
        source={LOADING}
        autoPlay
        loop
        style={{ width: 150, height: 150 }}
      />
    </Wrap>
  );
};

export default LoadingCover;
