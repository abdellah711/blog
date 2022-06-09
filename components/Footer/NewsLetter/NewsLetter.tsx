import { FormEventHandler, useEffect, useState } from 'react'
import * as Styled from './styles'


const NewsLetter = () => {
    const [success, setSuccess] = useState<boolean| null>(null)
    const handleSubmit:FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault()
        setSuccess(true)
    }

    useEffect(()=>{
        if(success != null) {
            let id = setTimeout(()=>setSuccess(null),5000)
            return () => clearTimeout(id)
        }
    },[success])

    return (
        <Styled.Container>
            <h1>Newsletter</h1>
            <p>Subscribe to our newsletter stay up to date with new articles ...</p>
            <Styled.Form onSubmit={handleSubmit}>
                <Styled.Input type="email" name="email" required placeholder='Enter you email...' />
                <button>Subscribe</button>
            </Styled.Form>
            {success && (<p>Thank you for your subscription!</p>)}
        </Styled.Container>
    )
}

export default NewsLetter