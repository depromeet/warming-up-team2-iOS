import React from 'react';
import useForm from 'react-hook-form';
import { TextInput, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import styled from 'styled-components/native';
import DateTimePicker, {
  AndroidEvent,
} from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import _isEmpty from 'lodash/isEmpty';

import * as ExpenditureActions from 'store/expenditure/actions';
import * as NavigationService from 'libs/NavigationService';
import colors from 'libs/colors';
import { formatDates, formatDatesDash } from 'libs/dateUtils';
import {
  ScreenWrap,
  Text,
  MainButton,
  SingleLineTextInput,
  Touchable,
  TagViews,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from 'store';
import { ExpenditureType } from 'store/expenditure/state';

const Wrap = styled(KeyboardAwareScrollView)`
  flex: 1;
  background-color: ${colors.white};
  padding: 39px 20px;
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
  font-size: 18px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${({ isFocused }) =>
    isFocused ? '#00aef2' : '#d1d1d1'};
  padding-bottom: 7px;
  margin-top: 20px;
`;

const FirstStepWriting: NavigationStackScreenComponent = () => {
  const timePickerTextInput = React.useRef<TextInput>(null);
  const [dateTimeFocused, setDateTimeFocused] = React.useState(false);
  const [uploadTime, setUploadTime] = React.useState(new Date());
  const { register, setValue, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const { writingExpenditure } = useSelector<RootReducerType, ExpenditureType>(
    state => state.expenditureState,
  );

  React.useEffect(() => {
    if (!_isEmpty(errors)) {
      Alert.alert('에러', '필요한 항목을 모두 넣었는지 확인해주세요');
    }
  }, [errors]);

  const onPressNext = () => {
    NavigationService.navigate('SecStep');
  };

  const setDate = () => {
    setDateTimeFocused(false);
    setTimeout(() => {
      if (timePickerTextInput.current) {
        timePickerTextInput.current.blur();
      }
    }, 650);
  };

  const onFocusDateTime = (isFocused: boolean) => {
    setDateTimeFocused(isFocused);
    if (!isFocused) {
      setTimeout(() => {
        if (timePickerTextInput.current) {
          timePickerTextInput.current.blur();
        }
      }, 650);
    }
  };

  const onDateChange = (event: AndroidEvent, date?: Date) => {
    if (date) {
      dispatch(
        ExpenditureActions.setExpenditureInfo(
          'expendedAt',
          formatDatesDash(date),
        ),
      );
      setUploadTime(date);
    }
  };

  const onChagneText = (type: string) => (text: string) => {
    dispatch(
      ExpenditureActions.setExpenditureInfo(type, text.replace(/,/gi, '')),
    );
    setValue(type, text);
  };

  const getLocaleValue = () => {
    const value = parseInt(
      writingExpenditure.amountOfMoney,
      10,
    ).toLocaleString();
    if (value === 'NaN') {
      return '';
    }

    return value;
  };

  return (
    <ScreenWrap>
      <Wrap>
        <TextView>
          <StyledSingleLineTextInput
            ref={register({ name: 'title' }, { required: true })}
            autoFocus
            placeholder="내역"
            title="어느곳에 지출하셨나요"
            tailText="에 지출"
            returnKeyType="done"
            onChangeText={onChagneText('title')}
          />
        </TextView>
        <TextView>
          <StyledSingleLineTextInput
            ref={register({ name: 'amountOfMoney' }, { required: true })}
            placeholder="0"
            title="얼마를 지출하셨나요"
            tailText="원"
            returnKeyType="done"
            keyboardType="numeric"
            onChangeText={onChagneText('amountOfMoney')}
            value={getLocaleValue()}
          />
        </TextView>
        <TextView>
          <RowView>
            <TitieText>날짜(선택)</TitieText>
            <SubText>미수정시 오늘 날짜로 등록됩니다</SubText>
          </RowView>
          <StyledTextInput
            value={uploadTime ? formatDates(uploadTime) : ''}
            placeholder="2019년 00월 00일"
            onFocus={() => onFocusDateTime(true)}
            isFocused={dateTimeFocused}
            ref={timePickerTextInput}
          />
        </TextView>
        <TextView>
          <RowView>
            <TitieText>결제수단(선택)</TitieText>
            <SubText>미선택시 미등록으로 기록됩니다</SubText>
          </RowView>
          <TagViews
            multiple={false}
            tags={['카드', '현금']}
            onSelect={selected => {
              dispatch(
                ExpenditureActions.setExpenditureInfo(
                  'paymentMethod',
                  selected,
                ),
              );
            }}
          />
        </TextView>
      </Wrap>
      <BottomButton onPress={handleSubmit(onPressNext)} title="다음" primary />
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
            value={uploadTime || new Date()}
            mode="date"
            locale="ko"
            minuteInterval={30}
            onChange={onDateChange}
          />
        </ModalContainer>
      </Modal>
    </ScreenWrap>
  );
};

export default FirstStepWriting;
