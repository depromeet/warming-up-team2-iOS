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
  amountOfMoney: number | string;
  category: string;
  description: string;
  title: string;
  expendedAt: string;
  paymentMethod: string;
  imageUrl: string;
}

export interface getMeType {
  connectionCode: string;
  id: number;
  name: string;
  profileImageUrl: string | null;
  spouseName: string;
  status: 'SOLO' | 'COUPLE';
}

export interface ExpenditureResultType {
  amountOfMoney: number;
  createdAt: string;
  description: string;
  expendedAt: string;
  id: number;
  imageUrl: string | null;
  paymentMethod: 'CARD' | 'CASH';
  title: string;
  updatedAt: string;
  member: getMeType;
}
