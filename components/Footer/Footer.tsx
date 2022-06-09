import React from 'react'
import About from './About'
import NewsLetter from './NewsLetter'
import * as Styled from './styles'


const Footer = () => {
    return (
        <Styled.Footer>
            <div>
                <About />
                <NewsLetter />
            </div>
            <Styled.Copyright>Made with <span>♥</span> by Alaoui @ 2022</Styled.Copyright>
        </Styled.Footer>
    )
}

export default Footer