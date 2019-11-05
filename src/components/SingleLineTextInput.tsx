import React from 'react';
import {
  Platform,
  StyleProp,
  TextInputProps,
  TextInput,
  ReturnKeyType,
  KeyboardType,
} from 'react-native';
import styled from 'styled-components/native';

import Text from './Text';

const Wrap = styled.View``;

const Tail = styled(Text)`
  font-size: 18px;
  position: absolute;
  right: 0;
  bottom: 4px;
  background-color: white;
`;

const StyledTextInput = styled(TextInput)<{ isFocused: boolean }>`
  font-size: 18px;
  flex: 1;
  border-bottom-width: 1.5px;
  border-bottom-color: ${({ isFocused }) =>
    isFocused ? '#00aef2' : '#d1d1d1'};
  padding-bottom: 7px;
`;

const TitieText = styled(Text)`
  flex: 0.8;
  font-size: 18px;
  font-weight: bold;
`;

// TODO: ref any타입 없애기
interface Props {
  style?: StyleProp<TextInputProps>;
  onChangeText: (text: string) => void;
  title?: string;
  autoFocus?: boolean;
  blurOnSubmit?: boolean;
  isRow?: boolean;
  tailText?: string;
  isLight?: boolean;
  maxLength?: number;
  returnKeyType?: ReturnKeyType;
  placeholder?: string;
  keyboardType?: KeyboardType;
  ref: any;
}

const SingleLineTextInput: React.FC<Props> = ({
  autoFocus,
  onChangeText,
  isRow = false,
  isLight = false,
  title,
  maxLength,
  style,
  returnKeyType,
  placeholder,
  tailText,
  keyboardType,
  ref,
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

  const flexDirection = isRow ? 'row' : 'column';

  const [focused, setFocused] = React.useState(false);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <Wrap style={{ flexDirection, justifyContent: 'space-between' }}>
      {title && <TitieText>{title}</TitieText>}
      <StyledTextInput
        ref={ref}
        onBlur={onBlur}
        onFocus={onFocus}
        isFocused={focused}
        style={[defaultStyle, style]}
        allowFontScaling={false}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
        maxLength={maxLength}
        returnKeyType={returnKeyType}
        placeholder={placeholder}
        placeholderTextColor="#b7b7b7"
        keyboardType={keyboardType}
      />
      {tailText && <Tail>{tailText}</Tail>}
    </Wrap>
  );
};

export default SingleLineTextInput;
