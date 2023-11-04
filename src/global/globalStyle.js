import { createGlobalStyle } from 'styled-components';
import Fundo from '../assets/img/fundo2.png';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        background-color: #faeecc;
        background-image: url(${Fundo});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
    }
`;
export const GlobalStyleLogin = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

`;
