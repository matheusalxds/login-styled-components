import { createGlobalStyle } from 'styled-components';

import { fontMd, getByProperty } from '../styles';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${getByProperty('theme', 'bgColor')};
    min-height: 100%;
    margin: 0;
    color: ${getByProperty('theme', 'textColor')};
    font-family: 'system-ui', Ubuntu, sans-serif;
    font-size: ${fontMd};
  }
   
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
`;

export { GlobalStyle };
