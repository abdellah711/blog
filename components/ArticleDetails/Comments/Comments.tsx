import { ChangeEventHandler, CSSProperties, FC, FormEventHandler, useEffect, useState } from 'react'
import { ProgressBar } from 'styles/progress.styled'
import { IComment } from 'types/article'
import * as Styled from './styles'


const Comments: FC<{ comments: IComment[], slug: string }> = ({ comments, slug }) => {
    const [showCount, setShowCount] = useState(3)
    const [commentData, setCommentData] = useState({ name: '', email: '', content: '' })
    const [message, setMessage] = useState<{ content: string, type: 'success' | 'error' } | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [rememberEmail, setRememberEmail] = useState(true)

    useEffect(() => {
        if (message) {
            let id = setTimeout(() => setMessage(null), 5000)
            return () => clearTimeout(id)
        }
    }, [message])

    //to avoid SSR errors
    useEffect(() => {
        //set email if is saved in localstorage
        setCommentData({ ...commentData, email: window.atob(localStorage.getItem('cemail') ?? '') })
    }, [])

    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
        setCommentData({ ...commentData, [e.target.name]: e.target.value })
    }

    const handleSubmit: FormEventHandler = async e => {
        e.preventDefault()
        setIsLoading(true)
        if (rememberEmail) {
            localStorage.setItem("cemail", window.btoa(commentData.email))
        } else {
            localStorage.removeItem('cemail')
        }
        try {

            const resp = await fetch('/api/comment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ ...commentData, slug })
            })
            const { error, msg } = await resp.json()
            setIsLoading(false)
            if (msg) {
                setCommentData({ name: '', email: rememberEmail ? commentData.email : '', content: '' })
                return setMessage({ content: msg, type: 'success' })
            }
            if (error) return setMessage({ content: error, type: 'error' })
        } catch { }

        setIsLoading(false)
        setMessage({ content: 'Something went wrong!', type: 'error' })
    }

    return (
        <>

            <Styled.SectionTitle>Comments</Styled.SectionTitle>
            {comments.length > 0 ?
                comments.slice(0, showCount).map(comment => (<Comment comment={comment} key={comment.id} />))
                :
                (<Styled.EmptyView>No comment</Styled.EmptyView>)
            }
            {showCount < comments.length && (<Styled.ShowMore onClick={() => setShowCount(comments.length)}>Show more...</Styled.ShowMore>)}
            <Styled.CommentForm onSubmit={handleSubmit}>
                <Styled.SectionTitle>Leave a reply</Styled.SectionTitle>
                {message && <Styled.Message>{message.content}</Styled.Message>}
                <Styled.Row>
                    <input type="text" name="name" placeholder='name' value={commentData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder='email' value={commentData.email} onChange={handleChange} required />
                </Styled.Row>
                <textarea placeholder='comment...' name='content' value={commentData.content} onChange={handleChange} required></textarea>
                <Styled.Row>
                    <label><input type="checkbox" name="remember" checked={rememberEmail} onChange={e => setRememberEmail(e.target.checked)} /> Remember my email</label>
                    <button disabled={isLoading}>{isLoading ? (<ProgressBar style={{ '--color': '#fff', '--size': '1.5rem', marginInline: '1.5rem' } as CSSProperties} />) : 'Comment'}</button>
                </Styled.Row>
            </Styled.CommentForm>
        </>
    )
}

const Comment: FC<{ comment: IComment }> = ({ comment }) => {
    return (
        <Styled.CommentContainer>
            <h4>{comment.name} . <span>{Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(comment.createdAt!))}</span></h4>
            <p>{comment.content}</p>
        </Styled.CommentContainer>
    )
}


export default Comments