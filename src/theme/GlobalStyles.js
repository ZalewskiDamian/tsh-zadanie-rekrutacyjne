import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-family: 'Nunito', sans-serif;
    font-size: 62.5%;
  }
  body {
    font-size: 16px;
    background-color: #f2f2f2;
  }
  img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
