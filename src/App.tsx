import React from 'react';
import Cards from './components/Cards';
import Header from './components/Header';

import { GlobalStyle, Container } from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Cards />
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
