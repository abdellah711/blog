import Link from 'next/link';
import React, { FC } from 'react'
import * as Styled from './styles'


interface Props {
    currentPage: number;
    count?: number;
    totalPages: number;
}

const Pagination: FC<Props> = ({ currentPage, count = 7, totalPages }) => {
    const pageArr = getPagesArray({ currentPage, count, totalPages })
    // const 
    return totalPages > 1 ? (
        <Styled.PaginationContainer>
            <Link href={"/page/1"} passHref>
                <Styled.Link>first</Styled.Link>
            </Link>

            <Link href={"/page/" + (currentPage != 1 ? currentPage - 1 : 1)} passHref>
                <Styled.Link>{"<"}</Styled.Link>
            </Link>

            {pageArr.map(page => (<Link key={page} href={"/page/" + page} passHref><Styled.Link data-testid="page-link" active={page === currentPage}>{page}</Styled.Link></Link>))}

            <Link href={"/page/" + (currentPage != totalPages ? currentPage + 1 : totalPages)} passHref>
                <Styled.Link>{">"}</Styled.Link>
            </Link>

            <Link href={"/page/" + totalPages} passHref>
                <Styled.Link>last</Styled.Link>
            </Link>
        </Styled.PaginationContainer>
    ) : null
}

const getPagesArray = ({ currentPage, count = 7, totalPages }: Props) => {
    if (totalPages < count) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (currentPage <= Math.floor(count / 2) + 1) {
        return Array.from({ length: count }, (_, i) => i + 1)
    } else if (currentPage >= totalPages - Math.floor(count / 2) + 1) {
        return Array.from({ length: count }, (_, i) => i + totalPages - count)
    }

    return Array.from({ length: count }, (_, i) => i + currentPage - Math.floor(count / 2))
}

export default Pagination