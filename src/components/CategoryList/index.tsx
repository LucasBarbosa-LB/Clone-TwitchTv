import React from 'react';

import { Text } from 'react-native';

import {
  List,
  CategoryContainer,
  CatagoryName,
  CatagoryImage,
  CatagoryStatus,
  RedCircle,
  Info,
} from './styles';
import data from './data';

interface ItemProps {
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>

      <CatagoryImage source={item.source} />
      <CatagoryName numberOfLines={1}>{item.name}</CatagoryName>
      <CatagoryStatus>
        <RedCircle />
        <Info>18.9K</Info>
      </CatagoryStatus>

    </CategoryContainer>
  )


  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
