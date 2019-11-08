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
      title: { date: new Date(2019, 9, 1), expenditureAmountTotal: 30000 },
      data: [
        {
          category: '육아',
          expenditure: 10000,
          expenditureTitle: '분유',
          date: new Date(),
          payCategory: '카드',
        },
        {
          category: '여가',
          expenditure: 20000,
          expenditureTitle: '영화',
          date: new Date(),
          payCategory: '현금',
        },
      ],
    },
    {
      title: { date: new Date(2019, 9, 7), expenditureAmountTotal: 35000 },
      data: [
        {
          category: '육아',
          expenditure: 15000,
          expenditureTitle: '분유',
          date: new Date(),
          payCategory: '현금',
        },
        {
          category: '육아',
          expenditure: 20000,
          expenditureTitle: '젖병',
          date: new Date(),
          payCategory: '카드',
        },
      ],
    },
  ],
  [
    {
      title: { date: new Date(2019, 10, 1), expenditureAmountTotal: 40000 },
      data: [
        {
          category: '육아',
          expenditure: 20000,
          expenditureTitle: '분유',
          date: new Date(),
          payCategory: '카드',
        },
        {
          category: '육아',
          expenditure: 20000,
          expenditureTitle: '분유',
          date: new Date(),
          payCategory: '현금',
        },
      ],
    },
    {
      title: { date: new Date(2019, 10, 10), expenditureAmountTotal: 55000 },
      data: [
        {
          category: '육아',
          expenditure: 20000,
          expenditureTitle: '분유',
          date: new Date(),
          payCategory: '현금',
        },
        {
          category: '문화',
          expenditure: 35000,
          expenditureTitle: '영화',
          date: new Date(),
          payCategory: '카드',
        },
      ],
    },
    {
      title: { date: new Date(2019, 10, 30), expenditureAmountTotal: 55000 },
      data: [
        {
          category: '육아',
          expenditure: 10000,
          expenditureTitle: '해열제',
          date: new Date(),
          payCategory: '현금',
        },
        {
          category: '문화',
          expenditure: 30000,
          expenditureTitle: '영화',
          date: new Date(),
          payCategory: '카드',
        },
      ],
    },
  ],
  [
    {
      title: { date: new Date(2019, 11, 11), expenditureAmountTotal: 10000 },
      data: [
        {
          category: '육아',
          expenditure: 5000,
          expenditureTitle: '옷',
          date: new Date(),
          payCategory: '카드',
        },
        {
          category: '여가',
          expenditure: 5000,
          expenditureTitle: '피씨방',
          date: new Date(),
          payCategory: '현금',
        },
      ],
    },
    {
      title: { date: new Date(2019, 11, 17), expenditureAmountTotal: 85000 },
      data: [
        {
          category: '육아',
          expenditure: 15000,
          expenditureTitle: '귀저기',
          date: new Date(),
          payCategory: '현금',
        },
        {
          category: '육아',
          expenditure: 30000,
          expenditureTitle: '신발',
          date: new Date(),
          payCategory: '카드',
        },
        {
          category: '여가',
          expenditure: 10000,
          expenditureTitle: '노래방',
          date: new Date(),
          payCategory: '카드',
        },
        {
          category: '여가',
          expenditure: 10000,
          expenditureTitle: '피씨방',
          date: new Date(),
          payCategory: '카드',
        },
        {
          category: '문화',
          expenditure: 20000,
          expenditureTitle: '영화',
          date: new Date(),
          payCategory: '카드',
        },
      ],
    },
  ],
];

const DUMMY = [
  { month: '9월', expenditure: 65000, duration: '2019.09.01 - 2019.09.07' },
  { month: '10월', expenditure: 110000, duration: '2019.10.01 - 2019.10.30' },
  { month: '11월', expenditure: 95000, duration: '2019.11.11 - 2019.11.17' },
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

export default React.memo(AccountBook);
