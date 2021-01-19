import React from 'react';

import { Text } from 'react-native';

import {
  List,
  LiveContainer,
  CatagoryName,
  LiveImage,
  CatagoryStatus,
  Info,
} from './styles';
import data from './data';

interface ItemProps {
  item: typeof data[0];
}
const LiveList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <LiveContainer>

      <LiveImage source={item.source} />
      <CatagoryName numberOfLines={2}>{item.name}</CatagoryName>
      <CatagoryStatus>
        <Info>18.9K</Info>
      </CatagoryStatus>

    </LiveContainer>
  )


  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};


export default LiveList;
