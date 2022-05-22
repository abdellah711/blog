import styled, { createGlobalStyle } from 'styled-components';


export const Global = createGlobalStyle`
    :root{
        --container-inline-pd: 10vw; 
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
        background-color: ${({ theme }) => theme.colors.bg};
        accent-color: ${({ theme }) => theme.colors.primary};;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.onPrimary};
        border-radius: .3rem;
        border: none;
        font-size: 1rem;
        padding: .7rem 1rem;
        cursor: pointer;
    }

    p,label{
        color: ${({ theme }) => theme.colors.text?.body};
    }

    h1,h2,h3,h4{
        color: ${({ theme }) => theme.colors.text?.display};
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