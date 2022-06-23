import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import Link from 'next/link';
import LogoSrc from 'public/assets/images/logo.png';

const Logo = () => {
  return (
    <Link href={'/'} passHref>
      <Container>
          <Image src={LogoSrc} width={60} height={60} alt='logo' priority/>
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
      color: var(--color-text-display);
      font-weight: 400;
    }
`;

export default Logo