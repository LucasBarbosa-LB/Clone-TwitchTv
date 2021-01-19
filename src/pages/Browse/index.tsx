import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import CategoryList from '../../components/CategoryList';
import ChannelLike from '../../components/ChannelLike';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import LiveList from '../../components/LiveList';
import OptionsStream from '../../components/OptionsStream';
import StreamList from '../../components/StreamList';
import Title from '../../components/Title';
import { Container, Wrapper, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}
const Browse: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading> Browse </Heading>,
      },
      {
        key: 'C1',
        render: () => <OptionsStream />,
      },

      {
        key: 'CATEGORY_LIST',
        render: () => <Title > Categories | Live Channels </Title>,
        isTitle: true,
      },

      {
        key: 'C2',
        render: () => <CategoryList />,
      },


      {
        key: 'ALL_CATEGORIES',
        render: () => <Title> All Categories </Title>,
        isTitle: true,
      },
      {
        key: 'C4',
        render: () => <StreamList />,
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

export default Browse;
