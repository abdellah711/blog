import styled from 'styled-components';


export const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
    textarea{
        resize: vertical;
        min-height: 6rem;
    }

    input[type="text"] ,input[type="email"] , textarea{
        background-color: ${({ theme }) => theme.colors.input.bg};;
        border: none;
        outline-color: ${({ theme }) => theme.colors.primary};
        border-radius: .5em;
        padding: .9em;
        font-size: 1rem;
        font-family: inherit;
        ::placeholder{
            text-transform: capitalize;
            color: ${({ theme }) => theme.colors.input.color};
        }
    }

    label{
        cursor: pointer;
    }

    button{
        padding: .5rem 1rem;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    > input {
        flex: 1;
    }
`;

export const CommentContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: .7rem;

    ::before{
        content: "";
        width: 70%;
        height: .5px;
        align-self: center;
        background-color: #e0e0e0;
    }
    h4 {
        font-weight: 600;
        font-size: 1.1rem;
        span {
            font-size: .9rem;
            color: ${({ theme }) => theme.colors.text?.body};
        }
    }

    p{
        padding-left: 1rem;
    }
`;

export const ShowMore = styled.a`
    color: #2f7fff;
    cursor: pointer;
    display: block;
    margin-top: .3rem;
    margin-left: 1rem;
    width: fit-content;
`;

export const SectionTitle = styled.h3`
    font-size: 1.25rem;
    margin-top: 3rem;
`;

export const EmptyView = styled.p`
  text-align: center;
  padding-block: 1rem;
`;

export const Message = styled.p<{ error?: boolean }>`
    color: ${({ theme, error }) => theme.colors[error ? 'error' : 'success']};
`;