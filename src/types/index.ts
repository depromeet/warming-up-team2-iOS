import { StyleProp, TextStyle } from 'react-native';

import { FC } from 'react';

// export type Friend = Omit<User, 'uid'>;

interface IconProps {
  style?: StyleProp<TextStyle>;
  width?: number | string;
  height?: number | string;
  children?: never;
}

export type IconType = FC<IconProps>;
