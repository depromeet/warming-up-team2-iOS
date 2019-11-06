import React from 'react';
import styled from 'styled-components/native';
import { formatTime } from 'libs/timeUtils';

import Text from './Text';

interface Props {
  item: any;
}

const Wrap = styled.View`
  flex-direction: row;
  margin: 5px 0;
  padding-left: 7px;
  align-items: center;
`;

const CategoryText = styled(Text)`
  color: #00aef2;
  font-size: 12px;
`;

const Border = styled.View`
  width: 2.5px;
  background-color: #00aef2;
  border-radius: 4px;
  height: 100%;
  margin: 0 14px;
`;

const ColView = styled.View``;

const RowView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;

const ContentView = styled(Text)`
  color: #000000;
  font-size: 13px;
`;

const TimeText = styled(Text)`
  font-size: 10px;
  color: #191919;
`;

const ExpenditureItem: React.FC<Props> = ({ item }) => {
  return (
    <Wrap>
      <CategoryText>{item.category}</CategoryText>
      <Border />
      <RowView>
        <ColView>
          <ContentView>-{item.expenditure.toLocaleString()}원</ContentView>
          <ContentView>
            {item.expenditureTitle} / {item.payCategory}
          </ContentView>
        </ColView>
        <TimeText>{formatTime(item.date)}</TimeText>
      </RowView>
    </Wrap>
  );
};

export default ExpenditureItem;
