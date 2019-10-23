import React from 'react';
import styled from 'styled-components/native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { Touchable, Text } from 'components';
import { IC_MYPAGE, IC_BACK } from 'libs/icons';

export const defaultHeaderStyle = {
  backgroundColor: 'white',
  elevation: 0,
  borderBottomWidth: 0,
};

export const defaultHeaderTitleStyle = {
  fontSize: 18,
  lineHeight: 24,
  color: '#2c3744',
  fontWeight: 'normal',
};

const HeaderBackImage = styled.Image.attrs({ source: IC_BACK })``;

export const baseStackNavigationOptions = {
  headerStyle: defaultHeaderStyle,
  headerBackImage: () => <HeaderBackImage />,
  headerLeftContainerStyle: {
    paddingLeft: 20,
  },
  headerRightContainerStyle: {
    paddingRight: 20,
  },
};

const RowWrapper = styled.View`
  flex-direction: row;
`;

const Wrapper = styled.View``;

const HeaderTitleButton = styled(Touchable).attrs({
  hitSlop: { top: 5, bottom: 5, left: 5, right: 5 },
})<{ isRight: boolean }>`
  margin-left: ${({ isRight }) => (isRight ? 15 : 0)}px;
`;

const MyPageButton = styled(Touchable).attrs({
  hitSlop: { top: 10, right: 10, bottom: 10, left: 10 },
})``;

const MyPageImage = styled.Image.attrs({ source: IC_MYPAGE })`
  width: 32px;
  height: 32px;
`;

const HeaerText = styled(Text)<{ isFocused: boolean }>`
  font-size: 16px;
  color: ${({ isFocused }) => (isFocused ? '#0a0a0a' : '#b1b1b1')};
  font-weight: bold;
`;

export const mainScreenNavigationOptions = ({
  navigation,
}: NavigationStackScreenProps) => ({
  headerLeft: (
    <RowWrapper>
      <HeaderTitleButton
        isRight={false}
        onPress={() => {
          navigation.navigate('');
        }}
      >
        <HeaerText isFocused>피드</HeaerText>
      </HeaderTitleButton>
      <HeaderTitleButton onPress={() => {}} isRight>
        <HeaerText isFocused={false}>가계부</HeaerText>
      </HeaderTitleButton>
    </RowWrapper>
  ),
  headerRight: (
    <Wrapper>
      <MyPageButton onPress={() => {}}>
        <MyPageImage />
      </MyPageButton>
    </Wrapper>
  ),
});
