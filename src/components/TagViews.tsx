import React from 'react';
import styled from 'styled-components/native';

import Touchable from './Touchable';

interface Props {
  tags: string[];
}

const TagView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled(Touchable).attrs({
  hitSlop: { top: 4, right: 4, bottom: 4, left: 4 },
})<{ isSelected: boolean }>`
  border-radius: 16px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? '#00aef2' : '#d1d1d1')};
`;

const TagViews: React.FC<Props> = () => {
  return <TagView />;
};

export default TagViews;
