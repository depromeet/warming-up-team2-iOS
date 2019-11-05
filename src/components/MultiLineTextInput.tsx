import React from 'react';
import styled from 'styled-components/native';
import { TextInput, StyleProp, TextInputProps, Platform } from 'react-native';

const StyledTextInput = styled(TextInput)<{ isFocused: boolean }>`
  font-size: 14px;
  flex: 1;
  border-width: 1.5px;
  border-color: ${({ isFocused }) => (isFocused ? '#00aef2' : '#d1d1d1')};
  padding: 10px;
`;

interface Props {
  style?: StyleProp<TextInputProps>;
  maxLength?: number;
  autoFocus?: boolean;
  isLight?: boolean;
  blurOnSubmit?: boolean;
  onChangeText: (text: string) => void;
  placeHolder?: string;
}

const MultiLineTextInput: React.FC<Props> = ({
  style,
  autoFocus,
  onChangeText,
  maxLength,
  placeHolder,
  isLight = false,
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

  const [focused, setFocused] = React.useState(false);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <StyledTextInput
      isFocused={focused}
      multiline
      style={[defaultStyle, style]}
      allowFontScaling={false}
      autoFocus={autoFocus}
      onChangeText={onChangeText}
      onBlur={onBlur}
      onFocus={onFocus}
      maxLength={maxLength}
      placeholder={placeHolder}
    />
  );
};

export default MultiLineTextInput;
