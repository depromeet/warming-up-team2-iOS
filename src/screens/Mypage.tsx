import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import _compact from 'lodash/compact';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from 'store';
import { AppStateType } from 'store/app/state';

import * as AuthActions from 'store/auth/actions';
import {
  AnimatedGraph,
  HorizontalAnimatedBar,
  Text,
  SingleLineTextInput,
  Touchable,
} from 'components';
import { MYPAGE_IMG } from 'libs/icons';
import { AuthStateType } from 'store/auth/state';
import { DEVICE_WIDTH } from 'libs/styleUtils';

const Wrap = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 30 },
})`
  flex: 1;
`;

const TitleView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const ConnectTitleView = styled.View`
  margin-bottom: 50px;
`;

const Title = styled(Text)`
  font-size: 20px;
`;

const BoldTitle = styled(Title)`
  font-weight: bold;
  font-size: 30px;
`;

const ColView = styled.View`
  padding: 0 20px;
`;

const RowView = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

const ConnectRowView = styled.View`
  flex-direction: row;
  padding: 0 20px;
  margin-top: 22px;
`;

const MyCodeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MyCodeView = styled.View`
  background-color: #00aef2;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  width: 40px;
  height: 17px;
  margin-right: 4px;
`;

const MyCodeText = styled(Text)`
  font-size: 10px;
  color: white;
  font-weight: bold;
`;

const CodeText = styled(Text)`
  font-size: 30px;
  font-weight: bold;
`;

const GrayText = styled(Text)`
  color: #aaaaaa;
  font-size: 12px;
  margin-left: 5px;
`;

const ConnectBoldText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-right: 12px;
`;

const ConnectButton = styled(Touchable)`
  background-color: #ff7443;
  width: 72px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  margin-left: 12px;
`;

const SimpleConnectText = styled(Text)`
  color: white;
  font-size: 12px;
`;

const StyledSingleTextInput = styled(SingleLineTextInput)`
  width: ${DEVICE_WIDTH * 0.44}px;
`;

const MyPageGIF = styled.Image.attrs({
  source: MYPAGE_IMG,
  resizeMode: 'contain',
})`
  width: 87px;
  height: 87px;
`;

const Mypage: React.FC = () => {
  const zeroDatas = [0, 0, 0, 0, 0, 0];
  const newDatas = [80, 54, 89, 90, 40, 0];
  const expeditures = [
    DEVICE_WIDTH - 190,
    DEVICE_WIDTH - 270,
    DEVICE_WIDTH - 310,
  ];
  const right = new Animated.Value(0);
  const { userInfo } = useSelector<RootReducerType, AuthStateType>(
    state => state.authState,
  );
  const dispatch = useDispatch();

  const [connectionCode, setConnectionCode] = React.useState('');
  const [datas, setDatas] = React.useState(zeroDatas);
  const [lineDatas, setLineDatas] = React.useState(zeroDatas);
  const [horizintalGraphVisible, setHorizintalGraphVisible] = React.useState(
    false,
  );
  const { currentTabIndex } = useSelector<RootReducerType, AppStateType>(
    state => state.appState,
  );

  const [lineGraphInfo, setLineGraphInfo] = React.useState<{
    stroke: string;
    height: number;
    position: 'absolute' | 'relative';
  }>({
    stroke: 'white',
    position: 'relative',
    height: 0.4,
  });

  React.useEffect(() => {
    if (currentTabIndex === 2 && _compact(datas).length === 0) {
      setDatas(newDatas);
    }
  }, [currentTabIndex]);

  React.useEffect(() => {
    if (_compact(datas) && _compact(datas).length > 0) {
      setLineGraphInfo({
        stroke: '#00aef2',
        position: 'absolute',
        height: 200,
      });

      setLineDatas(newDatas);
    }
  }, [datas]);

  const isVisibleHorizontalGraph =
    _compact(lineDatas) && _compact(lineDatas).length > 0;

  React.useEffect(() => {
    if (isVisibleHorizontalGraph) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(right, {
            toValue: 145,
            duration: 3000,
          }),
          Animated.timing(right, {
            toValue: 0,
            duration: 0,
          }),
        ]),
        {
          iterations: -1,
        },
      ).start();
    }
  });

  const onChangeConnectText = (text: string) => {
    setConnectionCode(text);
  };

  const onPressRequestConnect = () => {
    dispatch(AuthActions.requestConnect(connectionCode));
  };

  const renderHeader = () => {
    const connected = userInfo.status === 'COUPLE';
    if (connected) {
      return (
        <TitleView>
          <ColView>
            <Title>
              <BoldTitle>{userInfo.spouseName}</BoldTitle>님과
            </Title>
            <Title>계정연동 중입니다</Title>
          </ColView>
          <Animated.View style={{ marginRight: right }}>
            <MyPageGIF />
          </Animated.View>
        </TitleView>
      );
    }

    return (
      <ConnectTitleView>
        <ColView>
          <MyCodeContainer>
            <MyCodeView>
              <MyCodeText>내 코드</MyCodeText>
            </MyCodeView>
            <CodeText>lfe939lz</CodeText>
          </MyCodeContainer>
          <Title>계정연동을 해주세요!</Title>
        </ColView>
        <ConnectRowView>
          <ConnectBoldText>배우자 코드</ConnectBoldText>
          <StyledSingleTextInput
            onChangeText={onChangeConnectText}
            placeholder="코드를 입력해주세요"
          />
          <ConnectButton onPress={onPressRequestConnect}>
            <SimpleConnectText>연동</SimpleConnectText>
          </ConnectButton>
        </ConnectRowView>
      </ConnectTitleView>
    );
  };

  return (
    <Wrap onScrollBeginDrag={() => setHorizintalGraphVisible(true)}>
      {renderHeader()}
      <ColView>
        <Title>한달 평균 소비</Title>
        <RowView>
          <BoldTitle>100,000</BoldTitle>
          <GrayText>(6개월 기준)</GrayText>
        </RowView>
      </ColView>
      <AnimatedGraph
        datas={datas}
        lineGraphInfo={lineGraphInfo}
        lineDatas={lineDatas}
      />
      <ColView>
        <Title>제일많은 소비</Title>
        <BoldTitle>육아용품</BoldTitle>
      </ColView>
      {horizintalGraphVisible && (
        <HorizontalAnimatedBar expeditures={expeditures} />
      )}
    </Wrap>
  );
};

export default Mypage;
