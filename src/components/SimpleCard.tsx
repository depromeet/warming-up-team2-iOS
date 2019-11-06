import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

import { DEVICE_WIDTH } from 'libs/styleUtils';

// TODO: 데이터 타입 정의
interface Props {
  data: any;
}

const DiraryImage = styled(FastImage)`
  width: ${(DEVICE_WIDTH - 48) / 2}px;
  height: ${(DEVICE_WIDTH - 48) / 2}px;
  border-radius: 10px;
`;

// import { Container } from './styles';

const SimpleCard: React.FC<Props> = ({ data }) => {
  return <DiraryImage source={{ uri: data.image }} />;
};

export default SimpleCard;
