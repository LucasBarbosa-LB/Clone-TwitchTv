import { Feather, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import React from 'react';

import { color } from 'react-native-reanimated';
import colors from '../../styles/colors';

import { Container, Avatar, RigthSide, Button, OnlineStatus } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RigthSide>
        <Button>
          <AntDesign
            name='videocamera'
            size={25}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather
            name='inbox'
            size={25}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name='message-outline'
            size={25}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather
            name='search'
            size={25}
            color={colors.black}
          />
        </Button>

      </RigthSide>
    </Container>
  );
};

export default Header;
