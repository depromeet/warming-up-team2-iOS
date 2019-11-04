import React from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import _compact from 'lodash/compact';

import {
  AnimatedGraph,
  HorizontalAnimatedBar,
  Text,
  SingleLineTextInput,
  Touchable,
} from 'components';

const animtation = require('lotties/mypage.json');

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
  width: 17 4px;
`;

const Mypage: React.FC = () => {
  const zeroDatas = [0, 0, 0, 0, 0, 0];
  const newDatas = [80, 54, 89, 90, 0, 0];
  const expeditures = [200, 150, 90];
  const right = new Animated.Value(0);

  const [datas, setDatas] = React.useState(zeroDatas);
  const [lineDatas, setLineDatas] = React.useState(zeroDatas);

  const [lineGraphInfo, setLineGraphInfo] = React.useState<{
    stroke: string;
    height: number;
    position: 'absolute' | 'relative';
  }>({
    stroke: 'white',
    position: 'relative',
    height: 0.5,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setDatas(newDatas);
    }, 4000);
    setTimeout(() => {
      setLineGraphInfo({
        stroke: '#00aef2',
        position: 'absolute',
        height: 200,
      });
      setLineDatas(newDatas);
    }, 5000);
  }, []);

  React.useEffect(() => {
    if (_compact(lineDatas) && _compact(lineDatas).length > 0) {
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

  const renderHeader = () => {
    const connected = true;
    if (connected) {
      return (
        <TitleView>
          <ColView>
            <Title>
              <BoldTitle>여해주</BoldTitle>님과
            </Title>
            <Title>계정연동 중입니다</Title>
          </ColView>
          <Animated.View style={{ marginRight: right, top: -10 }}>
            <LottieView
              source={animtation}
              autoPlay
              loop
              style={{
                width: 100,
                height: 100,
              }}
            />
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
            onChangeText={() => {}}
            placeholder="코드를 입력해주세요"
          />
          <ConnectButton onPress={() => {}}>
            <SimpleConnectText>연동</SimpleConnectText>
          </ConnectButton>
        </ConnectRowView>
      </ConnectTitleView>
    );
  };

  return (
    <Wrap>
      {renderHeader()}
      <ColView>
        <Title>한달 평균 소비</Title>
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
      <HorizontalAnimatedBar expeditures={expeditures} />
    </Wrap>
  );
};

export default Mypage;
