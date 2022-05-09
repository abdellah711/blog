import styled from 'styled-components';

export const Card = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    padding: 1rem;
    gap: 1rem;
    box-shadow: ${({ theme }) => theme.card.shadow};;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.card.borderRadius};;
    margin-block: 1rem;
    background-color: ${({ theme }) => theme.card.bg};;
    
    h2{
        color: ${({ theme }) => theme.colors.text?.title};
    }

    h3{
        font-weight: 600;
    }
`;

export const Image = styled.img`
    border-radius: ${({ theme }) => theme.card.borderRadius};;
    width: 15rem;
    aspect-ratio: 1;
    object-fit: cover;
`;

export const Row = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

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
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};
    font-size: 1rem;
    padding: .7rem .8rem .7rem 1rem;
    cursor: pointer;
    gap: .2rem;
    border-radius: .7rem;
    align-self: end;

    :hover svg{
        transform: translateX(4px);
    }
    svg{
        transition: transform .3s;
        height: 20px;
    }
`;

export const Empty = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-block: 5rem;
`;