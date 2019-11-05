import React from 'react';
import {
  NativeScrollRectangle,
  TouchableOpacity,
  StyleProp,
} from 'react-native';
import Touchable, {
  PlatformTouchableProps,
} from 'react-native-platform-touchable';

interface Props {
  disabled?: boolean;
  onPress: (arg: any) => any;
  style?: StyleProp<PlatformTouchableProps>;
  hitSlop?: NativeScrollRectangle;
  noEffect?: boolean;
}

export const BTouchable: React.FC<Props> = ({
  children,
  onPress,
  style,
  hitSlop,
  noEffect = false,
  disabled = false,
}) => {
  if (noEffect) {
    return (
      <TouchableOpacity
        disabled={disabled}
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
      disabled={disabled}
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
