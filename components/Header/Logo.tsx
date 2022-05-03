import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'} passHref>
      <Container>
          <Image src={'/assets/images/logo.png'} width="50" height="50"/>
          <h1>Blog</h1>
      </Container>
    </Link>
    )
}


const Container = styled.a`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    h1 {
      color: ${({ theme }) => theme.colors.text?.display};
      font-weight: 400;
    }
`;

export default Logo