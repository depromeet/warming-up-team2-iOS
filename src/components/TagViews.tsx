import React from 'react';
import styled from 'styled-components/native';

import Touchable from './Touchable';
import Text from './Text';

interface Props {
  tags: string[];
  onSelect: (selected: string[]) => void;
  multiple?: boolean;
}

const TagView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tag = styled(Touchable).attrs({
  hitSlop: { top: 4, right: 4, bottom: 4, left: 4 },
})<{ isSelected: boolean }>`
  border-radius: 16px;
  padding: 7px 28px;
  justify-content: center;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? '#00aef2' : '#d1d1d1')};
  margin-right: 12px;
  margin-top: 16px;
`;

const TagText = styled(Text)`
  font-size: 14px;
  color: white;
  font-weight: bold;
`;

const TagViews: React.FC<Props> = ({ tags, onSelect, multiple = true }) => {
  const [selected, setSelected] = React.useState<string[]>(['']);

  const onPressItem = (tag: string) => {
    if (multiple) {
      const selectedIn = [...selected];
      selectedIn.push(tag);
      setSelected(selectedIn);
      onSelect(selectedIn);

      return;
    }

    setSelected([tag]);
    onSelect([tag]);
  };

  return (
    <TagView>
      {tags.map((tag: string) => (
        <Tag
          key={tag}
          onPress={() => onPressItem(tag)}
          isSelected={selected.includes(tag)}
        >
          <TagText>{tag}</TagText>
        </Tag>
      ))}
    </TagView>
  );
};

export default TagViews;
