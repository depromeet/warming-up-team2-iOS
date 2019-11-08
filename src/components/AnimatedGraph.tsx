import * as Animatable from 'react-native-animatable';
import React from 'react';
import styled from 'styled-components/native';
import _compact from 'lodash/compact';
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

const Wrap = styled.View`
  margin-bottom: 50px;
`;

const AvgLine = styled(Animatable.View)`
  border-style: dotted;
  border-width: 1px;
  border-color: #fe5b22;
  position: absolute;
  top: 70px;
  left: 20px;
  right: 20px;
  width: ${DEVICE_WIDTH - 40};
`;

const AnimatedGraph: React.FC<Props> = ({
  datas,
  lineDatas,
  lineGraphInfo,
}) => {
  const handleViewRef = React.useRef<any>(null);
  const handleAvgViewRef = React.useRef<any>(null);
  const [avgVisible, setAvgVisible] = React.useState(false);
  const Gradient = () => (
    <Defs key="gradient">
      <LinearGradient id="gradient" x1="0%" x2="0%" y2="100%">
        <Stop offset="0%" stopColor="#00aef2" />
        <Stop offset="100%" stopColor="#ffffff" />
      </LinearGradient>
    </Defs>
  );

  React.useEffect(() => {
    if (_compact(lineDatas) && _compact(lineDatas).length > 0) {
      if (handleViewRef.current) {
        handleViewRef.current.fadeIn();
      }
      setTimeout(() => {
        setAvgVisible(true);
      }, 1400);
    }
  }, [lineDatas]);

  return (
    <Wrap>
      <BarChart
        animate
        animationDuration={800}
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
      <Animatable.View
        ref={handleViewRef}
        style={{ position: lineGraphInfo.position }}
      >
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
      </Animatable.View>
      {avgVisible && <AvgLine ref={handleAvgViewRef} animation="fadeInLeft" />}
    </Wrap>
  );
};

export default AnimatedGraph;
