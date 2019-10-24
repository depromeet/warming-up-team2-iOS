import React from 'react';
import { StyleProp, TextStyle, Platform, Animated } from 'react-native';

interface Props {
  style?: StyleProp<TextStyle>;
  isLight?: boolean;
  numberOfLines?: number;
  fontSize: Animated.AnimatedInterpolation;
}

const AnimatedText: React.FC<Props> = ({
  style,
  numberOfLines,
  children,
  isLight,
  fontSize = 10,
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
    <Animated.Text
      allowFontScaling={false}
      style={[defaultStyle, style, { fontSize }]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Animated.Text>
  );
};

export default AnimatedText;
