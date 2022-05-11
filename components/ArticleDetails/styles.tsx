import styled from 'styled-components';


export const Container = styled.article`
    margin-block: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const MainImg = styled.img`
    width:100%;
    border-radius: 1rem;
    margin-block: 1rem;
`;


export const Title = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text?.title};
    margin-bottom: .2rem;
    `;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin-top: .8rem;
    a{
        border-radius: 120px;
        border: 2px solid ${({ theme }) => theme.colors.primary};
        padding: .2rem .8rem;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 600;
        cursor: pointer;
        transition: .3s;
        font-size: .95rem;
        letter-spacing: .3px;
    }

    a:hover{
        background-color: ${({ theme }) => theme.colors.primary + '10'};
        transform: scale(.97);
    }
`;

export const TwitterLink = styled.a`
    display: flex;
    align-items: center;
    gap: .5rem;
    color: #3fa9f5;
    font-weight: 600;
    font-size: 1.1rem;
    width: fit-content;
    margin-left: auto;
    svg {
        width: 30px;
        transform: rotate(5deg);
        transition: .3s;
    }

    :hover svg {
        transform: rotate(-5deg) scale(1.1);
    }
`;

export const AuthorContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(2,auto);
    column-gap: 1.2rem;

    h2 {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text?.display};
        span {
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.text?.body};
        }
        span::before {
            content: '-';
            margin-right: 1ch;
        }
    }

    p {
        color: ${({ theme }) => theme.colors.text?.body};
    }
`;

export const AuthorImg = styled.img`
    object-fit: cover;
    width: 4.5rem;
    aspect-ratio: 1;
    grid-row: 1/-1;
`;