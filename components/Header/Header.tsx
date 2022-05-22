import React, { useState } from 'react'
import * as Styled from './styles'
import Logo from './Logo'
import NavIcon from './NavIcon'
import SearchIcon from '../../assets/icons/search.svg'
import DarkIcon from '../../assets/icons/dark.svg'
import LightIcon from '../../assets/icons/sun.svg'
import SearchModal from './Search/SearchModal'
import { useSwitchTheme } from 'context/switch-theme'

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const { isDark, switchTheme } = useSwitchTheme()
    return (
        <Styled.Header>
            <Logo />
            <Styled.Nav>
                <NavIcon Icon={SearchIcon} onClick={() => setIsSearchOpen(!isSearchOpen)} />
                <NavIcon Icon={isDark ? LightIcon : DarkIcon} onClick={switchTheme} style={isDark ? {fill: '#fff',padding:'.35rem'}:{}}/>
            </Styled.Nav>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </Styled.Header>
    )
}

export default Header