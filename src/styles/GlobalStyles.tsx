import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background-color: whitesmoke; */
    //position: relative;
    top: 300px;
    font-family: 'Nunito Sans', sans-serif;

    @media (max-width: 768px) {
      html, body {
        font-size: 16px;
      }
      h1 {
        font-size: 21px;
      }
      h2, h3 {
        font-size: 16px;
      }
    } 
  }

  button {
    font-family: 'Nunito Sans', sans-serif;
  }
`;
