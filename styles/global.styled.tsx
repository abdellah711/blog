import styled, { createGlobalStyle } from 'styled-components';


export const Global = createGlobalStyle`
    body{
        --container-inline-pd: 10vw;
        --card-borderRadius: 12px;
    }
    html {
        --color-primary: #0E9CD9;
        --color-onPrimary: #ffffff;
        --color-bg: #ffffff;
        --color-onBg: #222222;
        --color-error: #ff3232;
        --color-success: #2dd02a;
        --color-input-bg: #f5f5f5;
        --color-input-placeholderColor: #3f3f3f;
        --color-input-color: #222222;
        --color-text-display: #111111;
        --color-text-title: #1e1e1e;
        --color-text-body: #3e3e3e;
        --color-text-caution: #3e3e3ed9;
        --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 9px -2px rgb(0 0 0 / 0.1);
        --card-shadowHover: 2px 5px 25px -5px rgb(0 0 0 / 10%), 6px 8px 10px -6px rgb(0 0 0 / 10%);
        --card-bg: #ffffff;
        --color-icon-bg: #11111120;
        --color-gray-100: #99999925;
        --color-footer-bg: #394C68;
    }
    @media screen and (max-width:768px){
        :root{
            --container-inline-pd: 5vw; 
        }    
    }

    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: background-color .3s, color .3s;
    }

    body{
        min-height: 100vh;
        font-family: 'Nunito', sans-serif;
        background-color: var(--color-bg);
        accent-color: var(--color-primary);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        background-color: var(--color-primary);
        color: var(--color-onPrimary);
        border-radius: .3rem;
        border: none;
        font-size: 1rem;
        padding: .7rem 1rem;
        cursor: pointer;
    }

    p,label{
        color: var(--color-text-body);
    }

    h1,h2,h3,h4{
        color: var(--color-text-display);
    }
`;

export const Container = styled.div`
    max-width: calc(768px + 1rem);
    margin-inline: auto;
    padding-inline: 1rem;
    @media screen and (max-width:950px){
        padding-inline: var(--container-inline-pd);
        max-width: 100%;
    }
`;