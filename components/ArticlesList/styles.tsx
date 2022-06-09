import styled from 'styled-components';

export const Card = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    padding: 1rem;
    gap: 1rem;
    box-shadow: var(--card-shadow);
    overflow: hidden;
    border-radius: var(--card-borderRadius);
    margin-block: 1rem;
    background-color: var(--card-bg);;
    
    h2{
        color: var(--color-text-title);
    }

    h3{
        font-weight: 600;
    }

    p {
        display: -webkit-box !important;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        padding-block: 1.3rem;
    }
`;

export const Image = styled.img`
    border-radius: var(--card-borderRadius);
    width: 15rem;
    aspect-ratio: 1;
    object-fit: cover;

    @media screen and (max-width: 700px) {
        width: 100%;
        aspect-ratio: 3/2;
    }
`;

export const Row = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-top: .2rem;
    img{
        border-radius: 50%;
        object-fit: cover;
    }
`;

export const Column = styled.div`
    flex: 1;
`;

export const Button = styled.button`
    display: flex;
    background-color: var(--color-primary);
    color: var(--color-onPrimary);
    font-size: 1rem;
    padding: .7rem .8rem .7rem 1rem;
    cursor: pointer;
    gap: .2rem;
    border-radius: .7rem;
    align-self: end;
    white-space: nowrap;

    :hover svg{
        transform: translateX(4px);
    }
    svg{
        transition: transform .3s;
        height: 20px;
    }
    span{
        margin-top: -1px;
    }
`;

export const Empty = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-block: 5rem;
`;