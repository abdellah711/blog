import { CategoriesSidebar, RecentPostsSidebar } from 'components/Sidebar';
import React, { FC } from 'react'
import * as Styled from './styles'


interface Props {
    children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children, }) => {
    return (
        <Styled.Container>
            {children}
            <Styled.Aside>
                <CategoriesSidebar/>
                <RecentPostsSidebar/>
            </Styled.Aside>
        </Styled.Container>
    )
}

export default Layout