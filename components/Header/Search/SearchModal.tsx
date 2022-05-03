import * as Styled from './styles'
import SearchIcon from '../../../assets/icons/search.svg'
import { FC } from 'react'

type Props = {
    isOpen: boolean,
    onClose: Function
}

const SearchModal: FC<Props> = ({ isOpen, onClose }) => {
    return isOpen ? (
        <Styled.Modal onClick={e => e.target === e.currentTarget && onClose()}>
            <Styled.Dialog>
                <Styled.Input placeholder='Search...' />
                <Styled.Submit>
                    <SearchIcon />
                </Styled.Submit>
            </Styled.Dialog>
        </Styled.Modal>
    ) : null
}

export default SearchModal