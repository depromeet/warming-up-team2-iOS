import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { RootReducerType } from 'store';
import { ExpenditureResultType } from 'types';

import { selectExpenditureList } from 'store/ExpenditureEntities/selectors';
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

const Feed: React.FC = () => {
  const expenditureList = useSelector<RootReducerType, ExpenditureResultType[]>(
    selectExpenditureList,
  );
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
        data={expenditureList}
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

export default React.memo(Feed);
