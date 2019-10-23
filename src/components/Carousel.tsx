import React from 'react';
import { Dimensions, Animated } from 'react-native';

// import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import MonthSummaryCard from './MonthSummaryCard';

const { width: DEVICE_WIDTH } = Dimensions.get('window');

const AnimatedCarousel = Animated.createAnimatedComponent(Carousel);

interface Props {
  datas: any[];
  itemWidth: Animated.AnimatedInterpolation;
}

const BCarousel: React.FC<Props> = ({ datas, itemWidth }) => {
  const carouselRef = React.useRef(null);

  const renderItems = ({ item }: any) => {
    return <MonthSummaryCard width={itemWidth} item={item} />;
  };

  return (
    <AnimatedCarousel
      ref={carouselRef}
      data={datas}
      renderItem={renderItems}
      sliderWidth={DEVICE_WIDTH}
      itemWidth={itemWidth}
      activeSlideOffset={0}
      inactiveSlideOpacity={1}
      inactiveSlideScale={1}
      containerCustomStyle={{ paddingLeft: 20 }}
      activeSlideAlignment="start"
      slideStyle={{ marginRight: 10 }}
      useScrollView
    />
  );
};

export default BCarousel;
