import React from 'react';

import { FontAwesome, SimpleLineIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import { Text } from 'react-native';

import {
  List,
  StreamContainer,
  StreamColum,
  TagRow,
  TagView,
  TagText,


} from './styles';

const OptionsStream: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>

      <StreamColum>

        <TagRow>

          <TagView>
            <TagText>Music</TagText>
            <FontAwesome name="music" size={20} color="white" />
          </TagView>

          <TagView>
            <TagText>Games</TagText>
            <MaterialCommunityIcons name="controller-classic" size={24} color="white" />
          </TagView>

          <TagView>
            <TagText>Esports</TagText>
            <AntDesign name="Trophy" size={22} color="white" />
          </TagView>

          <TagView>
            <TagText>IRL</TagText>
            <SimpleLineIcons name="microphone" size={20} color="white" />
          </TagView>

        </TagRow>
      </StreamColum>
    </StreamContainer>
  )
  return (
    <List>
      <StreamItem />
    </List>
  );
};

export default OptionsStream;
