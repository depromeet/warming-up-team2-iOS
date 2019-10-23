import React from 'react';
import { StyleProp, ViewStyle, Platform, Text } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  isLight?: boolean;
  numberOfLines?: number;
}

const BText: React.FC<Props> = ({
  style,
  numberOfLines,
  children,
  isLight,
}) => {
  const defaultStyle = Platform.select({
    ios: {
      fontFamily: isLight ? 'NotoSansCJKkr-Light' : 'NotoSansCJKkr-Regular',
    },
    android: {
      //   fontFamily: isLight ? 'NotoSansKR-Light' : 'NotoSansKR-Regular',
      includeFontPadding: false,
    },
  });

  return (
    <Text
      allowFontScaling={false}
      style={[defaultStyle, style]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default BText;
