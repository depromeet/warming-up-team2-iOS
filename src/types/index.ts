import { AnyAction } from 'redux';
import { StyleProp, TextStyle } from 'react-native';
import { FC } from 'react';

interface IconProps {
  style?: StyleProp<TextStyle>;
  width?: number | string;
  height?: number | string;
  children?: never;
}

export type IconType = FC<IconProps>;

export interface ActionType extends AnyAction {
  payload: { [key: string]: any };
}
