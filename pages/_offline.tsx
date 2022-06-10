import React from 'react'
import styled from 'styled-components';

const Offline = () => {
  return (
    <Container>
        <h1>Oops! you&apos;re offline</h1>
        <p>Please check your internet connection and refresh this page</p>
        <button onClick={()=> window?.location?.reload?.()}>Refresh</button>
    </Container>
  )
}

const Container = styled.div`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export default Offline