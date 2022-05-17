import styled from 'styled-components';


export const Card = styled.div`
    box-shadow: ${({ theme }) => theme.card.shadow};;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.card.borderRadius};;
    margin-block: 1rem;
    background-color: ${({ theme }) => theme.card.bg};;
    padding: 1rem;

    h2{
        font-weight: 600;
        border-bottom: 1px solid #00000030;
        padding-bottom: .5rem;
    }
`;

export const List = styled.ul`
    list-style: none;
`;

export const ListItem = styled.a`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding: .3rem .5rem;
    margin-top: .5rem;
    transition: .2s ease-in-out;

    :hover{
        background-color: #00000010;
        border-radius: .5rem;
    }

    p{
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text?.body};
    }

    img{
        background-color: ${({ theme }) => theme.colors.bg};;
        border-radius: 50%;
        object-fit: cover;
        padding: .2rem;
    }
`;

