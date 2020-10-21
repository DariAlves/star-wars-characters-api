import React from 'react';
import CardItem from '../CardItem';

import { Container} from './styles'

const Cards: React.FC = () => {
  return (
    <Container>
      <h1>Cards</h1>
      <CardItem />
    </Container>
  );
};

export default Cards;
