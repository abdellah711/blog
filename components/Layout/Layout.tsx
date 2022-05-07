import { CategoriesSidebar, RecentPostsSidebar } from 'components/Sidebar';
import React, { FC } from 'react'
import * as Styled from './styles'


interface Props {
    children?: React.ReactNode;
    sidebars: React.ReactNode[];
    title?: string;
}

const Layout: FC<Props> = ({ children, sidebars, title }) => {
    return (
        <Styled.Container>
            <Styled.Main>
                <h2>{title}</h2>
                {children}
            </Styled.Main>
            <Styled.Aside>
                {sidebars}
            </Styled.Aside>
        </Styled.Container>
    )
}

export default Layout