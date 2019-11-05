import React from 'react';
import styled from 'styled-components/native';
import { useActionSheet } from '@expo/react-native-action-sheet';

import { IC_CAMERA } from 'libs/icons';
import Touchable from './Touchable';

const IMG_CAMERA = styled.Image.attrs({ source: IC_CAMERA })``;

const Wrap = styled(Touchable)`
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 66px;
  border-radius: 10px;
  background-color: #d1d1d1;
`;

const ImageUploader: React.FC = () => {
  const { showActionSheetWithOptions } = useActionSheet();
  const onPressUpload = () => {
    const options = ['촬영하기', '앨범에서 가져오기', '취소'];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        console.log('buttonIndex', buttonIndex);
        // Do something here depending on the button index selected
      },
    );
  };
  return (
    <Wrap onPress={onPressUpload}>
      <IMG_CAMERA />
    </Wrap>
  );
};

export default ImageUploader;
