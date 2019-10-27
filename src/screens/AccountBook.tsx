import React from 'react';
import { FlatList, Animated } from 'react-native';
import styled from 'styled-components/native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

import { Carousel } from 'components';

const HEADER_EXPANDED_HEIGHT = 148;
const HEADER_COLLAPSED_HEIGHT = 110;

const Wrap = styled.View`
  flex: 1;
  background-color: white;
`;

const HeaderView = styled(Animated.View)<{ height: number }>`
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
`;

const DUMMY = [
  { month: '1월', expenditure: 100000, duration: '2019.10.01 - 2019.10.07' },
  { month: '2월', expenditure: 200000, duration: '2019.11.01 - 2019.11.07' },
  { month: '3월', expenditure: 300000, duration: '2019.12.01 - 2019.12.07' },
  { month: '4월', expenditure: 400000, duration: '2019.10.01 - 2019.10.07' },
  { month: '5월', expenditure: 500000, duration: '2019.10.01 - 2019.10.07' },
  { month: '6월', expenditure: 600000, duration: '2019.10.01 - 2019.10.07' },
];

const contentContainerStyle = {
  padding: 24,
  backgroundColor: 'white',
};

const renderItems = () => {
  return (
    <Placeholder Animation={Fade} Left={PlaceholderMedia}>
      <PlaceholderLine width={40} />
      <PlaceholderLine width={60} />
    </Placeholder>
  );
};

const AccountBook: React.FC = () => {
  const scrollY = new Animated.Value(0);

  const headerHeight = scrollY.interpolate({
    inputRange: [-80, 0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [
      HEADER_EXPANDED_HEIGHT * (280 / 260),
      HEADER_EXPANDED_HEIGHT,
      HEADER_COLLAPSED_HEIGHT,
    ],
    extrapolate: 'clamp',
  });

  const itemWidth = scrollY.interpolate({
    inputRange: [-80, 0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [280, 260, HEADER_COLLAPSED_HEIGHT * (260 / 148)],
    extrapolate: 'clamp',
  });

  return (
    <Wrap>
      <HeaderView style={{ height: headerHeight }}>
        <Carousel datas={DUMMY} itemWidth={itemWidth} />
      </HeaderView>
      <FlatList
        contentContainerStyle={[
          contentContainerStyle,
          { paddingTop: HEADER_EXPANDED_HEIGHT + 20 },
        ]}
        data={DUMMY}
        renderItem={renderItems}
        keyExtractor={item => item.month}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ])}
        scrollEventThrottle={13}
      />
    </Wrap>
  );
};

export default AccountBook;
