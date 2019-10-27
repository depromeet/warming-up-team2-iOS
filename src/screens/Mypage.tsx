import React from 'react';
import styled from 'styled-components/native';

import { Text } from 'components';

const Wrap = styled.View`
  flex: 1;
`;

const Mypage: React.FC = () => {
  return (
    <Wrap>
      <Text>Mypage</Text>
    </Wrap>
  );
};

export default Mypage;
