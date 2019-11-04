import React from 'react';
import { TextInput } from 'react-natvie';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';

import * as NavigationService from 'libs/NavigationService';
import colors from 'libs/colors';
import {
  ScreenWrap,
  Text,
  MainButton,
  SingleLineTextInput,
  Touchable,
} from 'components';

const Wrap = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
  padding: 20px;
`;

const ModalContainer = styled.View`
  height: 266px;
  background-color: white;
`;

const TextView = styled.View`
  margin-bottom: 32px;
`;

const BottomButton = styled(MainButton)`
  position: absolute;
  height: 48px;
  bottom: 60px;
  left: 20px;
  right: 20px;
`;

const StyledSingleLineTextInput = styled(SingleLineTextInput)`
  margin-top: 20px;
`;

const RowView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitieText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

const SubText = styled(Text)`
  color: #00aef2;
  font-size: 13px;
`;

const ButtonsView = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;

const Button = styled(Touchable)`
  padding: 15px;
`;

const ButtonText = styled(Text)`
  color: #00aef2;
  font-size: 15px;
`;

const StyledTextInput = styled.TextInput<{ isFocused: boolean }>`
  border-bottom-width: 1.5px;
  border-bottom-color: ${({ isFocused }) =>
    isFocused ? '#00aef2' : '#d1d1d1'};
  padding-bottom: 7px;
  margin-top: 20px;
`;

const FirstStepWriting: NavigationStackScreenComponent = () => {
  const timePickerTextInput = React.useRef<TextInput>(null);
  const [dateTimeFocused, setDateTimeFocused] = React.useState(false);
  const onPressNext = () => {
    NavigationService.navigate('SecStep');
  };

  const setDate = () => {
    setDateTimeFocused(false);
    if (timePickerTextInput.current) {
      setTimeout(() => {
        timePickerTextInput.current.blur();
      }, 650);
    }
  };

  const onFocusDateTime = (isFocused: boolean) => {
    setDateTimeFocused(isFocused);
    if (!isFocused) {
      if (timePickerTextInput.current) {
        setTimeout(() => {
          timePickerTextInput.current.blur();
        }, 650);
      }
    }
  };

  return (
    <ScreenWrap>
      <Wrap>
        <TextView>
          <StyledSingleLineTextInput
            placeholder="내역"
            onChangeText={() => {}}
            title="어느곳에 지출하셨나요"
            tailText="에 지출"
            returnKeyType="done"
          />
        </TextView>
        <TextView>
          <StyledSingleLineTextInput
            placeholder="0"
            onChangeText={() => {}}
            title="얼마를 지출하셨나요"
            tailText="원"
            returnKeyType="done"
            keyboardType="numeric"
          />
        </TextView>
        <TextView>
          <RowView>
            <TitieText>날짜(선택)</TitieText>
            <SubText>미수정시 오늘 날짜로 등록됩니다</SubText>
          </RowView>
          <StyledTextInput
            placeholder="2019년 00월 00일"
            onFocus={() => onFocusDateTime(true)}
            isFocused={dateTimeFocused}
            ref={timePickerTextInput}
          />
        </TextView>
        <TextView>
          <TitieText>결제수단(선택)</TitieText>
        </TextView>
      </Wrap>
      <BottomButton onPress={onPressNext} title="다음" primary />
      <Modal
        isVisible={dateTimeFocused}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropTransitionOutTiming={0}
        style={{ margin: 0, justifyContent: 'flex-end' }}
        onBackdropPress={() => onFocusDateTime(false)}
      >
        <ModalContainer>
          <ButtonsView>
            <Button onPress={() => onFocusDateTime(false)}>
              <ButtonText>취소</ButtonText>
            </Button>
            <Button onPress={setDate}>
              <ButtonText>확인</ButtonText>
            </Button>
          </ButtonsView>
          <DateTimePicker
            value={new Date('2020-06-12T14:42:42')}
            mode="datetime"
            locale="ko"
            minuteInterval={30}
            // onChange={setDate}
          />
        </ModalContainer>
      </Modal>
    </ScreenWrap>
  );
};

export default FirstStepWriting;
