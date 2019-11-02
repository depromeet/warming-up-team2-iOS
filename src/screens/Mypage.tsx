import React from 'react';

import styled from 'styled-components/native';

import { AnimatedGraph, HorizontalAnimatedBar } from 'components';

const Wrap = styled.View`
  flex: 1;
`;

const Mypage: React.FC = () => {
  const zeroDatas = [0, 0, 0, 0, 0, 0];
  const newDatas = [80, 54, 89, 90, 0, 0];
  const expeditures = [200, 150, 90];

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

  return (
    <Wrap>
      <AnimatedGraph
        datas={datas}
        lineGraphInfo={lineGraphInfo}
        lineDatas={lineDatas}
      />
      <HorizontalAnimatedBar expeditures={expeditures} />
    </Wrap>
  );
};

export default Mypage;
