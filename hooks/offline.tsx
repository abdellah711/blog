import { useEffect, useState } from "react"
import styled, { keyframes } from 'styled-components';

const useOffline = () => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        const handleOffline = () => setIsOnline(false)
        const handleOnline = () => setIsOnline(true)

        addEventListener('offline', handleOffline)
        addEventListener('online', handleOnline)

        return () => {
            removeEventListener('offline', handleOffline)
            removeEventListener('online', handleOnline)
        }
    }, [])

    return { isOnline, isOffline: !isOnline }
}

export const useOfflineComponent = () => {
    const { isOffline } = useOffline()

    return isOffline ? <OfflineContainer>You're offline</OfflineContainer> : null
}

const animation = keyframes`from {transform: scaleY(0);}`
const OfflineContainer = styled.p`
    background-color: var(--color-primary);
    text-align: center;
    padding: .2rem;
    overflow: hidden;
    color: var(--color-onPrimary);
    transform-origin: top;
    position: sticky;
    top:0;
    left:0;
    right:0;
    z-index: 999;
    animation: ${animation} .3s;
`;


export default useOffline