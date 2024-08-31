import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --red: #B31312;
        --green: #2AD174;
        --green-opacity: rgba(42, 209, 116, 0.2);;
        /* Gray Scale */
        --white: #fafafa;
        --gray-200: #65656B;
        --gray-300: #2D2F30;
        --gray-400: #1A1B1B;
        --gray-500: #101011;
        --black: #121212;
        --yellow: #E2B000;

        --success: #22C55E;
        --danger: #EF4444;
        --import: #6366F1;
        --export: #A855F7
    }
    

    html {
        scroll-behavior: smooth;
    }

    img {
        user-select: none;
    }

    body {
        color: var(--white);
        height: auto !important;
        background-color: var(--gray-500);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
        font-style: normal;
    }
`

