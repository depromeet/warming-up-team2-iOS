import React from 'react';

import styled from 'styled-components/native';
import { BarChart, XAxis } from 'react-native-svg-charts';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

const Wrap = styled.View`
  flex: 1;
`;

const Mypage: React.FC = () => {
  const data = [0, 0, 0, 0, 0, 0];
  const newData = [50, 54, 60, 95, 60, 30];
  const [datas, setDats] = React.useState(data);

  React.useEffect(() => {
    setTimeout(() => {
      setDats(newData);
    }, 4400);
  }, []);

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
        data={data}
        formatLabel={(value, index) => index}
        contentInset={{ left: 15, right: 15 }}
        svg={{ fontSize: 12, fill: '#454545' }}
      />
    </Wrap>
  );
};

export default Mypage;
