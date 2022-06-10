import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
`;

export const Form = styled.form`
    background-color: var(--color-input-bg);
    border-radius: 5px;
    padding: .2rem;
    padding-right: .25rem;
    display: flex;
    flex-wrap: wrap;
`;

export const Input = styled.input`
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 1.05rem;
    font-weight: 400;
    font-family: inherit;
    color: var(--color-input-color);
    padding: .6rem 1.2rem .7rem;
    flex: 1;
    min-width: 0;
    
    ::placeholder{
        color: var(--color-input-placeholderColor);
    }
`;

