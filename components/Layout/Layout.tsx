import React, { FC } from 'react'
import * as Styled from './styles'


interface Props {
    sidebar: React.ReactNode[];
    children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children, sidebar }) => {
    return (
        <Styled.Container>
            {children}
            <Styled.Aside>
                {sidebar}
            </Styled.Aside>
        </Styled.Container>
    )
}

export default Layout