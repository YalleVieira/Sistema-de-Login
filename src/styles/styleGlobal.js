import { createGlobalStyle } from "styled-components";
import background from "../assets/img/background..jpg";

export const GlobalStyled = createGlobalStyle`
    :root {
        --cor--grey-light: #BEBEBE;
        --cor--grey-medium: #696969;
        --cor--grey-dark: #000000;
        --cor--primary: #000000;
        --cor-secondary: #1a0033;
        --cor--pink-destak: #2b0076;
        --cor--pink-secondary: #2b0545;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-image: url(${background});
        color: white;
    }
`;
