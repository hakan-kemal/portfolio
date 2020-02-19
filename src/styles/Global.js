import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Raleway:400,600&display=swap');;

  html {
    font-size: 60%;
    color: #2d3436;
  }

  body {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    text-align: center
  }
`;

export default GlobalStyles;
