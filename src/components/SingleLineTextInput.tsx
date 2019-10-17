import React from 'react';
import styled from 'styled-components/native';

const TextInput = styled.TextInput``;

interface Props {
  autoFocus?: boolean;
  blurOnSubmit?: boolean;
  onChangeText: (text: string) => void;
}

const SingleLineTextInput: React.FC<Props> = ({ autoFocus, onChangeText }) => {
  return (
    <TextInput
      allowFontScaling={false}
      autoFocus={autoFocus}
      onChangeText={onChangeText}
    />
  );
};

export default SingleLineTextInput;
