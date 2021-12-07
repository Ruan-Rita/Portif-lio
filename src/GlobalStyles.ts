import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body{

    }
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    button {
        border: none;
    }

    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: normal;
        src: url('${process.env.PUBLIC_URL}/assets/fonts/Nunito/Nunito-Regular.ttf');
    }

    .d-flex{
        display: flex !important;
    }
    .flex-column{
        flex-direction: column !important;
    }


`
export default GlobalStyles;