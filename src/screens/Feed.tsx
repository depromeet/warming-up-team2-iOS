import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Text } from 'components';
import { IMG_CHA_4 } from 'libs/icons';

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

const Wrap = styled.View`
  flex: 1;
`;

const renderItems = () => {
  return null;
};

const Feed: React.FC = () => {
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

  return (
    <Wrap>
      <FlatList
        data={[]}
        renderItem={renderItems}
        ListEmptyComponent={renderEmpty}
      />
    </Wrap>
  );
};

export default Feed;
