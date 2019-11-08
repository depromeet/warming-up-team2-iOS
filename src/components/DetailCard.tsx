import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import { Placeholder, PlaceholderMedia, Fade } from 'rn-placeholder';

import { ExpenditureResultType } from 'types';
import { DEVICE_WIDTH } from 'libs/styleUtils';

import Text from './Text';

const IMAGE_HIEIGHT = DEVICE_WIDTH - 40;

interface Props {
  data: ExpenditureResultType;
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
  line-height: 24px;
`;

const Date = styled(Text)`
  font-size: 14px;
  color: #909090;
  margin-bottom: 6px;
`;

const Desc = styled(Text)`
  font-size: 14px;
  color: #191919;
  margin-bottom: 40px;
  opacity: 0.8;
`;

const DetailCard: React.FC<Props> = ({ data }) => {
  return (
    <Wrap>
      {data.imageUrl && <DiraryImage source={{ uri: data.imageUrl }} />}
      {!data.imageUrl && (
        <Placeholder
          Animation={(props: any) => (
            <Fade {...props} style={{ backgroundColor: '#cbcbcb' }} />
          )}
        >
          <PlaceholderMedia
            size={DEVICE_WIDTH - 40}
            style={{ borderRadius: 10, marginBottom: 16 }}
          />
        </Placeholder>
      )}
      <TitleView>
        <Title>{data.title}</Title>
        <ExpenditureCategoryView>
          <Paycategory>
            {data.paymentMethod === 'CARD' ? '카드' : '현금'}
          </Paycategory>
          <ExpenditureAmount>
            {data.amountOfMoney.toLocaleString()}원
          </ExpenditureAmount>
        </ExpenditureCategoryView>
      </TitleView>
      <Date>{data.expendedAt.replace(/-/g, '. ')}</Date>
      <Desc>{data.description}</Desc>
    </Wrap>
  );
};

export default DetailCard;
