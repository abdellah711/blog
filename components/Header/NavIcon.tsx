import React, { ButtonHTMLAttributes, FC, HTMLAttributes } from 'react'
import styled from 'styled-components';

type Props = HTMLAttributes<HTMLElement> & {
    Icon: React.ElementType
}


const NavIcon: FC<Props> = ({ Icon, ...rest }) => {
    return (
        <StyledIcon {...rest}>
            {<Icon/>}
        </StyledIcon>
    )
}

const StyledIcon = styled.div`
    --size: 45px;
    width: var(--size);
    height: var(--size);
    padding: .5rem;
    background-color: #00000020;
    border-radius: 12px;
    cursor: pointer;
`;

export default NavIcon