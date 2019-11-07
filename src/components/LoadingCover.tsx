import React from 'react';
import styled from 'styled-components/native';

const Wrap = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
`;

const LoadingCover = () => {
  return <Wrap />;
};

export default LoadingCover;
