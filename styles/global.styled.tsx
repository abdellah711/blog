import { createGlobalStyle } from 'styled-components';


export const Global = createGlobalStyle`
    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`;

