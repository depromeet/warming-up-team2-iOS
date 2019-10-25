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
  onPress: () => void;
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
