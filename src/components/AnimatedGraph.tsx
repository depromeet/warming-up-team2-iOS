import React from 'react';
import styled from 'styled-components/native';
import _compact from 'lodash/compact';
import { Animated } from 'react-native';
import { BarChart, XAxis, LineChart } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

import { DEVICE_WIDTH } from 'libs/styleUtils';

interface Props {
  datas: number[];
  lineDatas: number[];
  lineGraphInfo: {
    height: number;
    stroke: string;
    position: 'absolute' | 'relative';
  };
}

const Wrap = styled.View``;

const AvgLine = styled(Animated.View)`
  border-style: dotted;
  border-width: 1px;
  border-color: #fe5b22;
  position: absolute;
  top: 70px;
  left: 20px;
  right: 20px;
`;

const AnimatedGraph: React.FC<Props> = ({
  datas,
  lineDatas,
  lineGraphInfo,
}) => {
  const width = new Animated.Value(0);
  const [avgVisible, setAvgVisible] = React.useState(false);
  const opacity = new Animated.Value(0);

  React.useEffect(() => {
    if (_compact(lineDatas) && _compact(lineDatas).length > 0) {
      setAvgVisible(true);
      Animated.timing(width, {
        toValue: DEVICE_WIDTH - 40,
        duration: 1500,
      }).start();
    }
  }, [lineDatas]);

  React.useEffect(() => {
    if (avgVisible) {
      Animated.timing(width, {
        toValue: DEVICE_WIDTH - 40,
        duration: 3000,
      }).start();
    }
    if (avgVisible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 3000,
      }).start();
    }
  }, [avgVisible]);

  const Gradient = () => (
    <Defs key="gradient">
      <LinearGradient id="gradient" x1="0%" x2="0%" y2="100%">
        <Stop offset="0%" stopColor="#00aef2" />
        <Stop offset="100%" stopColor="#ffffff" />
      </LinearGradient>
    </Defs>
  );

  return (
    <Wrap>
      <BarChart
        animate
        animationDuration={1000}
        spacingInner={0.9}
        style={{ height: 200, marginHorizontal: 20 }}
        data={datas}
        svg={{
          fill: 'url(#gradient)',
        }}
        contentInset={{ top: 20, bottom: 20 }}
      >
        <Gradient />
      </BarChart>
      <XAxis
        style={{ marginHorizontal: 10, marginTop: 10 }}
        data={datas}
        formatLabel={(value, index) => `${index + 1}월`}
        contentInset={{ left: 17, right: 17 }}
        svg={{ fontSize: 12, fill: '#454545' }}
      />

      <Animated.View style={{ opacity, position: lineGraphInfo.position }}>
        <LineChart
          style={{
            height: lineGraphInfo.height,
            zIndex: 200,
            marginHorizontal: 20,
          }}
          data={lineDatas}
          svg={{ stroke: lineGraphInfo.stroke }}
          contentInset={{ top: 20, bottom: 20, left: 8, right: 8 }}
        />
      </Animated.View>

      {avgVisible && <AvgLine style={{ width }} />}
    </Wrap>
  );
};

export default AnimatedGraph;
