import React from 'react';
import { StyleProp, TextStyle, Platform, Text } from 'react-native';

interface Props {
  style?: StyleProp<TextStyle>;
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
      color: '#191919',
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
