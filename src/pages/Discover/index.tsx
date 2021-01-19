import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import CategoryList from '../../components/CategoryList';
import ChannelLike from '../../components/ChannelLike';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import LiveList from '../../components/LiveList';
import OptionsStream from '../../components/OptionsStream';
import Title from '../../components/Title';
import { Container, Wrapper, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Discover: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading> Discover </Heading>,
      },

      {
        key: 'C1',
        render: () => <LiveList />,
      },
      {
        key: 'C2',
        render: () => <OptionsStream />,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title> CATEGORIES WE THINK YOU'LL LIKE </Title>,
        isTitle: true,
      },
      {
        key: 'C3',
        render: () => <CategoryList />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title> LIVE CHANNELS WE THINK YOU'LL LIKE </Title>,
        isTitle: true,
      },
      {
        key: 'C4',
        render: () => <ChannelLike />,
      },


    ];
    const indices: number[] = [];
    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    }

  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indices}
            //Efeito de Refresh
            onRefresh={() => { }}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Discover;
