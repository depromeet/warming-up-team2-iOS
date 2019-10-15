import React from 'react';
import {
  NativeScrollRectangle,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  hitSlop?: NativeScrollRectangle;
  noEffect?: boolean;
}

export const BTouchable: React.FC<Props> = ({
  children,
  onPress,
  style,
  hitSlop,
  noEffect,
}) => {
  if (noEffect) {
    return (
      <TouchableOpacity
        style={style}
        onPress={onPress}
        activeOpacity={0.75}
        hitSlop={hitSlop}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <Touchable
      style={style}
      onPress={onPress}
      activeOpacity={0.75}
      hitSlop={hitSlop}
    >
      {children}
    </Touchable>
  );
};

export default BTouchable;
