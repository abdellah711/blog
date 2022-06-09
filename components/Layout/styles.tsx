import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 1.5rem;
    padding-inline: var(--container-inline-pd);
    flex-wrap: wrap;
    padding-top: 1.5rem;
`;

export const Aside = styled.aside`
    position: sticky;
    top: 0;
    align-self: flex-start;
    flex: 1 1 300px;
    margin-top: 2rem;
`;

export const Main = styled.main`
    flex: 1 1 50vw;

    h2{
        font-weight: 600;
    }
`;