import React from 'react';
import Header from './components/Header';

import { GlobalStyle, Container } from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
