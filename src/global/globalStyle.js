import { createGlobalStyle } from 'styled-components';
import FundoLogin from '/assets/img/FundoLogin.png';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        background-color: #232526;    
    }
    `;
export const GlobalStyleError = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        color: aliceblue;
        background-color: #232526;
        height: 100vh;
    }
    `;
export const GlobalStyleLogin = createGlobalStyle`
    body{
        background-image: url(${FundoLogin});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

`;
