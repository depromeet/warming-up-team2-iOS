import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { Placeholder, PlaceholderMedia, Fade } from 'rn-placeholder';

import { ExpenditureResultType } from 'types';
import { DEVICE_WIDTH } from 'libs/styleUtils';

interface Props {
  data: ExpenditureResultType;
}

const DiraryImage = styled(FastImage)`
  width: ${(DEVICE_WIDTH - 48) / 2}px;
  height: ${(DEVICE_WIDTH - 48) / 2}px;
  border-radius: 10px;
`;

const DefaltView = styled.View`
  width: ${(DEVICE_WIDTH - 48) / 2}px;
  height: ${(DEVICE_WIDTH - 48) / 2}px;
  border-radius: 10px;
  background-color: #cbcbcb;
`;

// import { Container } from './styles';

const SimpleCard: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.imageUrl && <DiraryImage source={{ uri: data.imageUrl }} />}
      {!data.imageUrl && <DefaltView />}
    </>
  );
};

export default SimpleCard;
