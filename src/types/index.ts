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

export interface ExpenditureWriteType {
  amountOfMoney: number;
  category: string;
  description: string;
  title: string;
}

export interface getMeType {
  connectionCode: string;
  id: number;
  name: string;
  profileImageUrl: string | null;
  status: 'SOLO' | 'COUPLE';
}
