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
  MainButton,
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

const BottomButtonViews = styled.View`
  position: absolute;
  height: 48px;
  bottom: 60px;
  left: 20px;
  right: 20px;
  flex-direction: row;
`;

const BottomButton = styled(MainButton)`
  flex: 1;
  margin: 0 4px;
`;

const SecondStepWriting: NavigationStackScreenComponent = () => {
  const onPressDone = () => {
    // NavigationService.navigate('SecStep');
    console.log('onPressDone');
  };

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
            tags={['생활용품', '육아용품', '문화', '건강']}
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
      <BottomButtonViews>
        <BottomButton onPress={onPressDone} title="바로 완료" />
        <BottomButton onPress={onPressDone} title="작성" primary />
      </BottomButtonViews>
    </ScreenWrap>
  );
};

export default SecondStepWriting;
