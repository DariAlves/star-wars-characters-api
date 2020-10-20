import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: #000;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
