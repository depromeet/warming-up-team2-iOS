import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import colors from 'libs/colors';
import {
  ScreenWrap,
  Text,
  TagViews,
  ImageUploader,
  MultiLineTextInput,
} from 'components';

const Wrap = styled(KeyboardAwareScrollView)`
  flex: 1;
  background-color: ${colors.white};
  padding: 39px 20px;
`;

const TextView = styled.View`
  margin-bottom: 32px;
`;

const TitieText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

const RowView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SubText = styled(Text)`
  color: #00aef2;
  font-size: 13px;
`;

const ImageUploadInnerView = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

const StyledMultiLineTextInput = styled(MultiLineTextInput)`
  border-radius: 8px;
  margin-left: 10px;
`;

const SecondStepWriting: NavigationStackScreenComponent = () => {
  return (
    <ScreenWrap>
      <Wrap>
        <TextView>
          <RowView>
            <TitieText>결제수단(선택)</TitieText>
            <SubText>미선택시 미등록으로 기록됩니다</SubText>
          </RowView>
          <TagViews
            multiple={false}
            tags={['육아용품', '유흥', '식비', '기타']}
            onSelect={selected => {
              console.log('selected', selected);
            }}
          />
        </TextView>
        <TextView>
          <TitieText>추억을 기록해보세요!(선택)</TitieText>
          <ImageUploadInnerView>
            <ImageUploader />
            <StyledMultiLineTextInput
              placeHolder="최대 200자까지 작성가능합니다"
              onChangeText={() => {}}
              maxLength={200}
            />
          </ImageUploadInnerView>
        </TextView>
      </Wrap>
    </ScreenWrap>
  );
};

export default SecondStepWriting;
