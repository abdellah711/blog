import styled, { keyframes } from 'styled-components';


const animation = keyframes`
    to{ transform: rotate(360deg)}
`

export const ProgressBar = styled.div`
    width: var(--size,30px);
    height: var(--size,30px);
    border-radius: 50%;
    border: 2px solid var(--color,${({ theme }) => theme.colors.primary});
    border-top-color: #00000000;
    animation: ${animation} .8s infinite linear;
`;

export const ProgressContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-block: 1rem;
`;