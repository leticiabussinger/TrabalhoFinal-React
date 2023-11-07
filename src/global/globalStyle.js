import { createGlobalStyle } from "styled-components";
import Fundo from "../assets/img/fundo2.png";
import FundoLogin from "../assets/img/fundologin1.png";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;

    }
    body{
        /* background-color: #faeecc; */
        background-color: #232426;
        /* background-image: url(${Fundo}); */
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
            
    }
    `;
export const GlobalStyleLogin = createGlobalStyle`
    body{
        background-image: url(${FundoLogin});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        /* min-height: calc(100vh + 251px); */
        /* position: relative; */
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

`;
