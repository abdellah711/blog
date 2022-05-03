import React, { useState } from 'react'
import * as Styled from './styles'
import Logo from './Logo'
import NavIcon from './NavIcon'
import SearchIcon from '../../assets/icons/search.svg'
import DarkIcon from '../../assets/icons/dark.svg'
import SearchModal from './Search/SearchModal'

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <Styled.Header>
            <Logo />
            <Styled.Nav>
                <NavIcon Icon={SearchIcon} onClick={()=>setIsSearchOpen(!isSearchOpen)}/>
                <NavIcon Icon={DarkIcon} />
            </Styled.Nav>
            <SearchModal isOpen={isSearchOpen} onClose={()=>setIsSearchOpen(false)}/>
        </Styled.Header>
    )
}

export default Header