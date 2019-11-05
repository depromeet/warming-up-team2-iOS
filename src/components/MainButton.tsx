import React from 'react';
import styled from 'styled-components/native';
import { NativeScrollRectangle, StyleProp } from 'react-native';
import { PlatformTouchableProps } from 'react-native-platform-touchable';

import Touchable from './Touchable';
import Text from './Text';

interface Props {
  disabled?: boolean;
  onPress: (arg: any) => any;
  style?: StyleProp<PlatformTouchableProps>;
  primary?: boolean;
  hitSlop?: NativeScrollRectangle;
  title: string;
}

const StyledMainButton = styled(Touchable)<{ primary: boolean }>`
  height: 48px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  background-color: ${({ primary }) => (primary ? '#ff7443' : 'white')};
  border-width: 1px;
  border-color: ${({ primary }) => (primary ? '#ff7443' : '#d1d1d1')};
`;

const TitleText = styled(Text)<{ primary: boolean }>`
  font-size: 14px;
  color: ${({ primary }) => (primary ? 'white' : '#ff7443')};
  font-weight: bold;
`;

const MainButton: React.FC<Props> = ({
  style,
  hitSlop,
  onPress,
  title,
  primary = false,
  disabled = false,
}) => {
  return (
    <StyledMainButton
      disabled={disabled}
      style={style}
      primary={primary}
      onPress={onPress}
      hitSlop={hitSlop}
    >
      <TitleText primary={primary}>{title}</TitleText>
    </StyledMainButton>
  );
};

export default MainButton;
