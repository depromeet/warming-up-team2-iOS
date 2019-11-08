import React from 'react';
import ImagePicker, { Image } from 'react-native-image-crop-picker';
import styled from 'styled-components/native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import _isEmpty from 'lodash/isEmpty';
import { useDispatch, useSelector } from 'react-redux';

import * as ExpenditureActions from 'store/expenditure/actions';
import { IC_CAMERA } from 'libs/icons';
import { RootReducerType } from 'store';
import { ExpenditureType } from 'store/expenditure/state';
import Touchable from './Touchable';

const IMG_CAMERA = styled.Image.attrs({ source: IC_CAMERA })``;

const UploadImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

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
  const dispatch = useDispatch();
  const { writingExpenditure } = useSelector<RootReducerType, ExpenditureType>(
    state => state.expenditureState,
  );
  const onPressUpload = () => {
    const options = ['촬영하기', '앨범에서 가져오기', '취소'];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      async buttonIndex => {
        if (buttonIndex === 0) {
          const result = await request(PERMISSIONS.IOS.CAMERA);
          if (result === RESULTS.GRANTED) {
            ImagePicker.openCamera({
              width: 500,
              height: 500,
              cropping: true,
            }).then(image => {
              if (!Array.isArray(image)) {
                dispatch(
                  ExpenditureActions.setExpenditureInfo('imageUrl', image.path),
                );
              }
            });
          }

          return;
        }
        if (buttonIndex === 1) {
          const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
          if (result === RESULTS.GRANTED) {
            ImagePicker.openPicker({
              width: 500,
              height: 500,
              cropping: true,
            }).then((image: Image | Image[]) => {
              if (!Array.isArray(image)) {
                dispatch(
                  ExpenditureActions.setExpenditureInfo('imageUrl', image.path),
                );
              }
            });
          }
        }
      },
    );
  };
  return (
    <Wrap onPress={onPressUpload}>
      <>
        {_isEmpty(writingExpenditure.imageUrl) && <IMG_CAMERA />}
        {!_isEmpty(writingExpenditure.imageUrl) && (
          <UploadImage source={{ uri: writingExpenditure.imageUrl }} />
        )}
      </>
    </Wrap>
  );
};

export default ImageUploader;
