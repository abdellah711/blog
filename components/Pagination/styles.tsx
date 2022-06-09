import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 3.5rem;
    position: relative;

    ::before{
        content: "";
        width: 80%;
        height: 1px;
        top: 0;
        background-color: var(--color-icon-bg);
        position: absolute;
        margin-top: -1rem;
    }
`;

export const Link = styled.a<{ active?: boolean }>`
    color: ${({ active }) => `var(--color-text-${active ? 'body' : 'caution'})`};
    padding: .5rem;
    text-transform: capitalize;
    transition: .3s;
    :hover{
        border-radius: 4px;
        background-color: var(--color-gray-100);
        transform: ${({ active }) => active ? '':'translateY(-3px) scale(1.05)'};
    }

    ::before{
        content: ${({ active }) => active ? '""' : 'none'};;
        position: absolute;
        top: 0;
        transform: translateX(-30%);
        margin-top: -1rem;
        width: 2rem;
        height: 1.2px;
        background-color: var(--color-text-display);
    }
`;