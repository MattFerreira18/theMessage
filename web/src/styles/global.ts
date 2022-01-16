import { createGlobalStyle } from 'styled-components';

import { COLORS } from './COLORS';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${COLORS.GRAY_800};
    color: ${COLORS.GRAY_100};
    
    width: 100vw;
    height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  body, button, a, textarea, input {
    font-family: 'Open Sans', sans-serif;
  }

  input, button, textarea {
    transition: 250ms;
  }

  input, textarea {
    outline: none;
  }

  hr {
    border: none;
    height: 1px;
    background: ${COLORS.BLACK};

    margin: 0.8rem 0;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${COLORS.GRAY_700};
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.ORANGE_500};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${COLORS.ORANGE_600};
  }
`;
