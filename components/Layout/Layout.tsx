import { CategoriesSidebar, RecentPostsSidebar } from 'components/Sidebar';
import React, { FC } from 'react'
import * as Styled from './styles'


interface Props {
    children?: React.ReactNode;
    sidebars: React.ReactNode[];
}

const Layout: FC<Props> = ({ children, sidebars }) => {
    return (
        <Styled.Container>
            {children}
            <Styled.Aside>
                { sidebars }
            </Styled.Aside>
        </Styled.Container>
    )
}

export default Layout