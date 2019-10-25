import React from 'react';
import { Platform, Animated } from 'react-native';

// TODO: any코드 고치기
interface Props {
  style?: any;
  isLight?: boolean;
  numberOfLines?: number;
}

const AnimatedText: React.FC<Props> = ({
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
    <Animated.Text
      allowFontScaling={false}
      style={[defaultStyle, style]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Animated.Text>
  );
};

export default AnimatedText;
