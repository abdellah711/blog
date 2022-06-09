import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    gap: 1rem;
    margin: 1rem;
`;

export const Item = styled.a`
    box-shadow: var(--card-shadow);
    padding: .8rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    transition: .3s;
    background-color: var(--card-bg);;
    :hover{
        transform: scale(1.03);
        box-shadow: var(--card-shadowHover);
    }
    
    :active{
        transform: scale(.97);
        box-shadow: none;
    }
        
    img{
        width: 50px;
        border-radius: 50%;
        aspect-ratio: 1;
        background-color: #fff;
        object-fit: cover;
        padding: .2rem;
    }

    p {
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: .5px;
    }
`;