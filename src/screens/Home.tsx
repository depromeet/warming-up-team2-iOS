import React from 'react';
import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { TabView, SceneMap, NavigationState } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';

import * as ExpenditureActions from 'store/expenditure/actions';
import * as AppActions from 'store/app/actions';
import * as NavigationService from 'libs/NavigationService';
import { RootReducerType } from 'store';
import { AuthStateType } from 'store/auth/state';
import { DEVICE_WIDTH } from 'libs/styleUtils';
import { ScreenWrap, Touchable } from 'components';
import { IC_MYPAGE, IC_EDIT } from 'libs/icons';
import AccountBook from './AccountBook';
import Feed from './Feed';
import Mypage from './Mypage';

const TabViewWrapper = styled.View`
  flex-direction: row;
  padding-top: 33px;
  padding-left: 20px;
  height: 100px;
`;

const TabButton = styled(Touchable)<{ right: boolean }>`
  margin-left: ${({ right }) => (right ? 32 : 0)}px;
`;

const MypageButton = styled(Touchable)`
  top: 18px;
  right: 20px;
  position: absolute;
`;

const MyPageImage = styled.Image.attrs({ source: IC_MYPAGE })`
  width: 40px;
  height: 40px;
`;

const UserImage = styled(FastImage)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const WriteButton = styled(Touchable)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: absolute;
  right: 20px;
  bottom: 30px;
  background-color: #ff7443;
  justify-content: center;
  align-items: center;
`;

const EditIcon = styled.Image.attrs({ source: IC_EDIT })`
  width: 30px;
  height: 30px;
`;

export const Home: NavigationStackScreenComponent = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector<RootReducerType, AuthStateType>(
    state => state.authState,
  );
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
  const routes = [
    { key: 'feed', title: '피드' },
    { key: 'accountBook', title: '가계부' },
    { key: 'myPage', title: '마이페이지' },
  ];

  React.useEffect(() => {
    dispatch(ExpenditureActions.fetchExpenditures());
    dispatch(ExpenditureActions.fetchExpendituresGraph());
    dispatch(ExpenditureActions.fetchExpendituresCategory());
  }, []);

  const onChangeTabIndex = (index: number) => {
    dispatch(AppActions.setCurrentIndex(index));
    setCurrentTabIndex(index);
  };

  const renderTabBar = ({
    navigationState,
    position,
  }: {
    navigationState: NavigationState<{ key: string; title: string }>;
    position: Animated.Node<number>;
  }) => {
    const inputRange = [-10, ...navigationState.routes.map((x, i) => i), 10];

    return (
      <TabViewWrapper>
        {navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 0 : 192,
                ),
              }),
            ),
            Animated.round(
              Animated.interpolate(position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 0 : 192,
                ),
              }),
            ),
            Animated.round(
              Animated.interpolate(position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 0 : 192,
                ),
              }),
            ),
          );

          if (i === 2) {
            return (
              <MypageButton onPress={() => onChangeTabIndex(i)} key={route.key}>
                <>
                  {!userInfo.profileImageUrl && <MyPageImage />}
                  {userInfo.profileImageUrl && (
                    <UserImage source={{ uri: userInfo.profileImageUrl }} />
                  )}
                </>
              </MypageButton>
            );
          }

          return (
            <TabButton
              onPress={() => onChangeTabIndex(i)}
              right={i === 1}
              key={route.key}
            >
              <Animated.Text
                style={{ color, fontSize: 20, fontWeight: 'bold' }}
              >
                {route.title}
              </Animated.Text>
            </TabButton>
          );
        })}
      </TabViewWrapper>
    );
  };

  const onPressWrite = () => {
    NavigationService.navigate('FirstStep');
  };

  return (
    <ScreenWrap>
      <TabView
        navigationState={{ index: currentTabIndex, routes }}
        renderScene={SceneMap({
          feed: Feed,
          accountBook: AccountBook,
          myPage: Mypage,
        })}
        onIndexChange={onChangeTabIndex}
        initialLayout={{ width: DEVICE_WIDTH }}
        renderTabBar={renderTabBar}
        swipeVelocityImpact={1}
        springVelocityScale={4}
      />
      <WriteButton onPress={onPressWrite}>
        <EditIcon />
      </WriteButton>
    </ScreenWrap>
  );
};

export default Home;
