import styled, { createGlobalStyle } from 'styled-components';


export const Global = createGlobalStyle`
    body{
        --container-inline-pd: 10vw;
        --card-borderRadius: 12px;
    }
    body.ddark{
        --color-primary: #0E9CD9;
        --color-onPrimary: #ffffff;
        --color-bg: #181818;
        --color-onBg: #fafafa;
        --color-error: #ff3232;
        --color-success: #2dd02a;
        --color-input-bg: #3f3f3f;
        --color-input-placeholderColor: #e0e0e0;
        --color-input-color: #fafafa;
        --color-text-display: #ffffff;
        --color-text-title: #fafafa;
        --color-text-body: #e9e9e9;
        --card-shadow: none;
        --card-shadowHover: none;
        --card-bg: #333333;
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