import React from 'react';

import streamThumbnail from '../../images/nesk.png';
// import nesk from '../../images/stream_thumbnail-nesk.jpg';
// import psk from '../../images/stream_thumbnail-psk.jpg';

import { Text } from 'react-native';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColum,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,


} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColum>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}> Lagonis BD</StreamUserName>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            Vem com Lagonis !!! Live e amuleto.
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            R6 - Cola na live
            </StreamCategory>
        </StreamRow>

        <TagRow>

          <TagView>
            <TagText>R6</TagText>
          </TagView>

          <TagView>
            <TagText>GO-BD</TagText>
          </TagView>

        </TagRow>
      </StreamColum>
    </StreamContainer>
  )
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
