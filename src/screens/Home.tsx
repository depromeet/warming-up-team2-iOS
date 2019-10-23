import React from 'react';
import { FlatList, Animated } from 'react-native';
import styled from 'styled-components/native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

import { ScreenWrap, MonthSummaryCard } from 'components';

const HEADER_EXPANDED_HEIGHT = 150;
const HEADER_COLLAPSED_HEIGHT = 0;

const Wrap = styled.View`
  flex: 1;
`;

const DUMMY = [
  { title: '1' },
  { title: '2' },
  { title: '3' },
  { title: '4' },
  { title: '5' },
  { title: '6' },
  { title: '7' },
  { title: '8' },
  { title: '9' },
  { title: '10' },
  { title: '11' },
  { title: '12' },
  { title: '13' },
];

const contentContainerStyle = {
  padding: 24,
};

const HeaderView = styled(Animated.View)<{ height: number }>`
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
`;

const renderItems = () => {
  return (
    <Placeholder Animation={Fade} Left={PlaceholderMedia}>
      <PlaceholderLine width={40} />
      <PlaceholderLine width={60} />
    </Placeholder>
  );
};

export const Home: NavigationStackScreenComponent = () => {
  const scrollY = new Animated.Value(0);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: 'clamp',
  });

  const itemWidth = scrollY.interpolate({
    inputRange: [-80, 0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [280, 226, 0],
    extrapolate: 'clamp',
  });

  return (
    <ScreenWrap>
      <Wrap>
        <HeaderView style={{ height: headerHeight }}>
          <MonthSummaryCard item="item" width={itemWidth} />
        </HeaderView>
        <FlatList
          contentContainerStyle={[
            contentContainerStyle,
            { paddingTop: HEADER_EXPANDED_HEIGHT + 20 },
          ]}
          data={DUMMY}
          renderItem={renderItems}
          keyExtractor={item => item.title}
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
    </ScreenWrap>
  );
};

export default Home;
