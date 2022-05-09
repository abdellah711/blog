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
    }

    body{
        min-height: 100vh;
        font-family: 'Nunito', sans-serif;
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

    p{
        color: ${({ theme }) => theme.colors.text?.body};
    }
`;

export const Container = styled.div`
    padding-inline: var(--container-inline-pd);
`;