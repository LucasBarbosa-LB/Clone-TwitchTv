import React from 'react';

import data from './data';


import { Text } from 'react-native';

import {
  List,
  ChannelContainer,
  ChannelRow,
  ChannelThumbnail,
  ChannelColum,
  ChannelHeader,
  ChannelAvatar,
  ChannelUserName,
  ChannelDescription,
  ChannelCategory,
  TagRow,
  TagView,
  TagText,


} from './styles';

interface ItemProps {
  item: typeof data[0];
}

const ChannelLike: React.FC = () => {
  const ChannelItem: React.FC<ItemProps> = ({ item }) => (
    <ChannelContainer>
      <ChannelThumbnail source={item.source} />

      <ChannelColum>
        <ChannelRow>
          <ChannelHeader>
            <ChannelAvatar />
            <ChannelUserName numberOfLines={1}>{item.name}</ChannelUserName>
          </ChannelHeader>
          <ChannelDescription numberOfLines={2}>
            {item.description}
          </ChannelDescription>

          <ChannelCategory numberOfLines={1}>
            {item.tag}
          </ChannelCategory>
        </ChannelRow>

        <TagRow>

          <TagView>
            <TagText> {item.idioma} </TagText>
          </TagView>

        </TagRow>
      </ChannelColum>
    </ChannelContainer>
  )
  return (
    <List>
      {data.map(item => (
        <ChannelItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default ChannelLike;
