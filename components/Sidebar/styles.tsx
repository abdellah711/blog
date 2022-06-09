import styled from 'styled-components';


export const Card = styled.div`
    box-shadow: var(--card-shadow);
    overflow: hidden;
    border-radius: var(--card-borderRadius);
    margin-block: 1rem 1.5rem;
    background-color: var(--card-bg);;
    padding: 1rem;

    h2{
        font-weight: 600;
        border-bottom: 1px solid var(--color-gray-100);
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
        background-color: var(--color-gray-100);
        border-radius: .5rem;
    }

    p{
        font-weight: 600;
        color: var(--color-text-body);
    }

    img{
        background-color: #fff;
        border-radius: 50%;
        object-fit: cover;
        padding: .2rem;
    }
`;

export const ShowMore = styled.a`
    text-align: center;
    display: block;
    margin-top: .5rem;
    padding: .5em;
    border-radius: .5rem;
    color: #22aaf3e2;
    cursor: pointer;
    transition: .3s;
    font-size: 1.05rem;
    :hover{
        background-color: #22aaf320;
    }
`;