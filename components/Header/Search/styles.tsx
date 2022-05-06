import styled, { keyframes } from 'styled-components';


const modalAnimation = keyframes`
    to{ background-color: #00000060;}
`

export const Modal = styled.div`
    position: fixed;
    inset: 0;
    z-index: 99;
    background-color: #00000000;
    display: grid;
    place-items: center;
    animation: ${modalAnimation} .3s forwards ease-in-out;
`;


const dialogAnimation = keyframes`
    from{ transform: scale(1.7); opacity: .2;}
`

export const Dialog = styled.form`
    display: flex;
    background-color: #fff;
    padding: .4rem;
    border-radius: .5rem;
    animation: ${dialogAnimation} .3s;
`;

export const Input = styled.input`
    padding: .3em .8rem;
    font-size: 1.3rem;
    font-weight: lighter;
    border:none;
    outline:none;
`;

export const Submit = styled.button`
    background-color: transparent;
    border:none;
    padding: .3rem;
    cursor: pointer;
    transition: .3s;
    display: flex;
    align-items: center;
    :hover{
        background-color: #00000020;
        border-radius: 12px;
    }

    svg{
        width: 27px;
    }
`;