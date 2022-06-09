import styled from 'styled-components';

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: var(--color-footer-bg);
    margin-top: 2.5rem;
    
    >div{
        margin-inline: auto;
        justify-content: space-between;
        width: min(90vw,1250px);
        display: flex;
        padding: 2rem;
        gap:2rem;
        flex-wrap: wrap;
    }
    h1, p{
        color: #fff !important;
        max-width: 45ch;
    }
`;


export const Copyright = styled.p`
    align-self: center;
    margin-block: 1rem;
    font-size: .9rem;
    span{
        color: red;
        padding-inline: 3px;
        font-size: 1rem;
    }
`;