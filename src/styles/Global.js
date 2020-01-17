import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  // @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,600&display=swap');;

  // *,
  // *::after,
  // *::before {
  //   margin: 0px;
  //   padding: 0px;
  //   box-sizing: inherit;
  // }

  html {
    font-size: 80%;
    color: #2d3436;
  }

  body {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    text-align: center
  }
`;

export default GlobalStyles;
