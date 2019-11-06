import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

import { DEVICE_WIDTH } from 'libs/styleUtils';
import { formatDatesDot } from 'libs/dateUtils';
import Text from './Text';

const IMAGE_HIEIGHT = DEVICE_WIDTH - 40;

// TODO: 데이터 타입 정의
interface Props {
  data: any;
}

const Wrap = styled.View``;

const DiraryImage = styled(FastImage)`
  width: 100%;
  height: ${IMAGE_HIEIGHT}px;
  border-radius: 10px;
  margin-bottom: 16px;
`;

const TitleView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const ExpenditureCategoryView = styled.View`
  flex-direction: row;
`;

const Title = styled(Text)`
  font-size: 18px;
  color: #191919;
`;

const Paycategory = styled(Text)`
  font-size: 12px;
  color: #00aef2;
  margin-right: 8px;
  font-weight: bold;
`;

const ExpenditureAmount = styled(Text)`
  font-size: 18px;
  color: #191919;
`;

const Date = styled(Text)`
  font-size: 12px;
  color: #909090;
  margin-bottom: 6px;
`;

const Desc = styled(Text)`
  font-size: 12px;
  color: #191919;
  margin-bottom: 40px;
`;

const DetailCard: React.FC<Props> = ({ data }) => {
  return (
    <Wrap>
      <DiraryImage source={{ uri: data.image }} />
      <TitleView>
        <Title>{data.expenditureTitle}</Title>
        <ExpenditureCategoryView>
          <Paycategory>{data.paycategory}</Paycategory>
          <ExpenditureAmount>
            {data.expenditureAmount.toLocaleString()}원
          </ExpenditureAmount>
        </ExpenditureCategoryView>
      </TitleView>
      <Date>{formatDatesDot(data.createdAt)}</Date>
      <Desc>{data.description}</Desc>
    </Wrap>
  );
};

export default DetailCard;
