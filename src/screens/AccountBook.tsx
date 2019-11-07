import React from 'react';
import { Animated, SectionList } from 'react-native';
import styled from 'styled-components/native';

import { Carousel, Text, ExpenditureItem } from 'components';
import { formatDatesDay } from 'libs/dateUtils';

interface Data {
  id: number;
}

const HEADER_EXPANDED_HEIGHT = 148;
const HEADER_COLLAPSED_HEIGHT = 110;

const Wrap = styled.View`
  flex: 1;
  background-color: white;
`;

const StyledSectionList = styled(SectionList)``;

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

const SectionView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DateText = styled(Text)`
  color: #343434;
  font-weight: bold;
  font-size: 12px;
`;

const ExpenditureText = styled(Text)`
  color: #fe5b22;
  font-size: 15px;
`;

const DATAS = [
  [
    {
      title: { date: new Date(), expenditureAmountTotal: 30000 },
      data: [
        {
          category: '육아',
          expenditure: 100000,
          expenditureTitle: '분유',
          date: new Date(),
          payCategory: '카드',
        },
        {
          category: '유흥',
          expenditure: 200000,
          expenditureTitle: '분유',
          date: new Date(),
          payCategory: '현금',
        },
      ],
    },
    {
      title: { date: new Date(), expenditureAmountTotal: 35000 },
      data: [
        {
          category: '육아',
          expenditure: 100000,
          expenditureTitle: '분유',
          date: new Date(),
          payCategory: '현금',
        },
        {
          category: '유흥',
          expenditure: 200000,
          expenditureTitle: '분유',
          date: new Date(),
          payCategory: '카드',
        },
      ],
    },
  ],
  [
    {
      title: { date: new Date(), expenditureAmountTotal: 40000 },
      data: [
        {
          category: '육아',
          expenditure: 200000,
          expenditureTitle: '분유2',
          date: new Date(),
          payCategory: '카드',
        },
        {
          category: '유흥',
          expenditure: 300000,
          expenditureTitle: '분유2',
          date: new Date(),
          payCategory: '현금',
        },
      ],
    },
    {
      title: { date: new Date(), expenditureAmountTotal: 55000 },
      data: [
        {
          category: '육아',
          expenditure: 400000,
          expenditureTitle: '분유3',
          date: new Date(),
          payCategory: '현금',
        },
        {
          category: '유흥',
          expenditure: 1200000,
          expenditureTitle: '분유3',
          date: new Date(),
          payCategory: '카드',
        },
      ],
    },
  ],
  [
    {
      title: { date: new Date(), expenditureAmountTotal: 10000 },
      data: [
        {
          category: '육아',
          expenditure: 400000,
          expenditureTitle: '분유4',
          date: new Date(),
          payCategory: '카드',
        },
        {
          category: '유흥',
          expenditure: 1200000,
          expenditureTitle: '분유4',
          date: new Date(),
          payCategory: '현금',
        },
      ],
    },
    {
      title: { date: new Date(), expenditureAmountTotal: 25000 },
      data: [
        {
          category: '육아',
          expenditure: 100000,
          expenditureTitle: '분유5',
          date: new Date(),
          payCategory: '현금',
        },
        {
          category: '유흥',
          expenditure: 200000,
          expenditureTitle: '분유5',
          date: new Date(),
          payCategory: '카드',
        },
      ],
    },
  ],
];

const DUMMY = [
  { month: '1월', expenditure: 100000, duration: '2019.10.01 - 2019.10.07' },
  { month: '2월', expenditure: 200000, duration: '2019.11.01 - 2019.11.07' },
  { month: '3월', expenditure: 300000, duration: '2019.12.01 - 2019.12.07' },
];

const contentContainerStyle = {
  padding: 24,
  backgroundColor: 'white',
};

const AccountBook: React.FC = () => {
  const scrollY = new Animated.Value(0);
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);

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

  const renderItems = ({ item }: any) => {
    return <ExpenditureItem item={item} />;
  };

  const renderHeader = ({ section: { title } }: any) => (
    <SectionView>
      <DateText>{formatDatesDay(title.date)}</DateText>
      <ExpenditureText>
        -{title.expenditureAmountTotal.toLocaleString()}원
      </ExpenditureText>
    </SectionView>
  );

  const onSnapToItem = (index: number) => {
    setCurrentCardIndex(index);
  };

  return (
    <Wrap>
      <HeaderView style={{ height: headerHeight }}>
        <Carousel
          datas={DUMMY}
          itemWidth={itemWidth}
          onSnapToItem={onSnapToItem}
          currentIndex={currentCardIndex}
        />
      </HeaderView>
      <StyledSectionList
        stickySectionHeadersEnabled
        contentContainerStyle={[
          contentContainerStyle,
          { paddingTop: HEADER_EXPANDED_HEIGHT + 20 },
        ]}
        sections={DATAS[currentCardIndex]}
        keyExtractor={(item, index) => {
          return item.category + index;
        }}
        renderItem={renderItems}
        renderSectionHeader={renderHeader}
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
