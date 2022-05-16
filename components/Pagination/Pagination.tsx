import Link from 'next/link';
import React, { FC } from 'react'
import * as Styled from './styles'


interface Props {
    currentPage: number;
    maxNumOfLinks?: number;
    totalPages: number;
    baseUrl: string;
}

const Pagination: FC<Props> = ({ currentPage, maxNumOfLinks = 7, totalPages, baseUrl }) => {
    const pageArr = getPagesArray({ currentPage, maxNumOfLinks, totalPages })

    return totalPages > 1 ? (
        <Styled.PaginationContainer>
            <Link href={baseUrl + "1"} passHref>
                <Styled.Link>first</Styled.Link>
            </Link>

            <Link href={baseUrl + (currentPage != 1 ? currentPage - 1 : 1)} passHref>
                <Styled.Link>{"<"}</Styled.Link>
            </Link>

            {pageArr.map(page => (<Link key={page} href={baseUrl + page} passHref><Styled.Link data-testid="page-link" active={page === currentPage}>{page}</Styled.Link></Link>))}

            <Link href={baseUrl + (currentPage != totalPages ? currentPage + 1 : totalPages)} passHref>
                <Styled.Link>{">"}</Styled.Link>
            </Link>

            <Link href={baseUrl + totalPages} passHref>
                <Styled.Link>last</Styled.Link>
            </Link>
        </Styled.PaginationContainer>
    ) : null
}

const getPagesArray = ({ currentPage, maxNumOfLinks = 7, totalPages }: Omit<Props, "baseUrl">) => {
    if (totalPages < maxNumOfLinks) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    if (currentPage <= Math.floor(maxNumOfLinks / 2) + 1) {
        return Array.from({ length: maxNumOfLinks }, (_, i) => i + 1)
    } else if (currentPage >= totalPages - Math.floor(maxNumOfLinks / 2) + 1) {
        return Array.from({ length: maxNumOfLinks }, (_, i) => i + totalPages - maxNumOfLinks)
    }

    return Array.from({ length: maxNumOfLinks }, (_, i) => i + currentPage - Math.floor(maxNumOfLinks / 2))
}

export default Pagination