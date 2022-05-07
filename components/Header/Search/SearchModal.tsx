import * as Styled from './styles'
import SearchIcon from '../../../assets/icons/search.svg'
import { ChangeEventHandler, EventHandler, FC, FormEventHandler, useState } from 'react'
import { useRouter } from 'next/router'

type Props = {
    isOpen: boolean,
    onClose: Function
}

const SearchModal: FC<Props> = ({ isOpen, onClose }) => {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = useState('')

    const handleChange: ChangeEventHandler<HTMLInputElement> = e => setSearchQuery(e.target.value)

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault()
        const params = new URLSearchParams()
        params.append('q',searchQuery)
        setSearchQuery('')
        onClose()
        router.push('/search?'+params.toString())
    } 

    return isOpen ? (
        <Styled.Modal onClick={e => e.target === e.currentTarget && onClose()}>
            <Styled.Dialog onSubmit={handleSubmit}>
                <Styled.Input placeholder='Search...' value={searchQuery} onChange={handleChange} required/>
                <Styled.Submit>
                    <SearchIcon />
                </Styled.Submit>
            </Styled.Dialog>
        </Styled.Modal>
    ) : null
}

export default SearchModal