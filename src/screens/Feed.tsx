import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Text, DetailCard, Touchable, SimpleCard } from 'components';
import { IMG_CHA_4, IC_FOUR_SQ, IC_ONE_SQ } from 'libs/icons';

const Wrap = styled.View`
  flex: 1;
`;

const NodataView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40%;
  height: 300px;
`;

const NoDataImg = styled.Image.attrs({ source: IMG_CHA_4 })`
  margin-bottom: 13px;
`;

const NoDateText = styled(Text)`
  color: #b1b1b1;
  font-size: 14px;
  text-align: center;
`;

const StyledFlatList = styled(FlatList as new () => FlatList<Data>).attrs({
  contentContainerStyle: { paddingHorizontal: 20, paddingBottom: 80 },
})``;

const Button = styled(Touchable)`
  margin: 20px 16px;
`;

const SquareImage = styled.Image``;

interface Data {
  id: number;
}

// TODO: 데이터 타입 정의
const DummyDatas = [
  {
    id: 0,
    image: 'https://via.placeholder.com/350',
    paycategory: '카드',
    expenditureTitle: '남편과 데이트1',
    description:
      '남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1',
    expenditureAmount: 3000,
    createdAt: new Date(),
  },
  {
    id: 1,
    image: 'https://via.placeholder.com/350',
    paycategory: '카드',
    description:
      '남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1',
    expenditureAmount: 35000,
    createdAt: new Date(),
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/350',
    paycategory: '현금',
    description:
      '남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1남편과 데이트1',
    expenditureTitle: '남편과 데이트3',
    expenditureAmount: 50000,
    createdAt: new Date(),
  },
];

const Feed: React.FC = () => {
  const [isDetailMode, setDetailMode] = React.useState(true);
  const onPressSquareButton = () => {
    setDetailMode(!isDetailMode);
  };
  const renderEmpty = () => {
    return (
      <NodataView>
        <NoDataImg />
        <NoDateText>
          {'아직 기록된 추억이 없군요 :-( \n가계부에서 작성해보세요!'}
        </NoDateText>
      </NodataView>
    );
  };

  const renderItems = ({ item }: any) => {
    if (isDetailMode) {
      return <DetailCard data={item} />;
    }
    return <SimpleCard data={item} />;
  };

  const keyExtractor = (item: Data) => item.id.toString();

  return (
    <Wrap>
      <Button onPress={onPressSquareButton}>
        <SquareImage source={isDetailMode ? IC_FOUR_SQ : IC_ONE_SQ} />
      </Button>
      <StyledFlatList
        key={isDetailMode ? 1 : 2}
        data={DummyDatas}
        renderItem={renderItems}
        ListEmptyComponent={renderEmpty}
        numColumns={isDetailMode ? 1 : 2}
        keyExtractor={keyExtractor}
        columnWrapperStyle={
          isDetailMode
            ? null
            : {
                justifyContent: 'space-between',
                marginTop: 10,
              }
        }
      />
    </Wrap>
  );
};

export default Feed;
