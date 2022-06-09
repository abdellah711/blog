import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const SocialMediaLink = styled.a`
    background: linear-gradient(125deg, #1861A5,var(--color-primary),#1861A5);
    padding: .3rem;
    display: flex;
    border-radius:.5rem;
    cursor: pointer;
    background-size: 300%;
    transition: .3s;
    :hover{
        background-position-x: 100%;
        transform: scale(1.05);
    }

    svg{
        width: 30px;
        height: 30px;
    }
`;