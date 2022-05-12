import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react'
import { IArticleDetails } from 'types/article'
import * as Styled from './styles'
import TwitterIcon from '../../assets/icons/twitter.svg'
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../utils/CodeBlock';
import rehypeRaw from 'rehype-raw'

interface Props {
    article: IArticleDetails;
}

const ArticleContent: FC<Props> = ({ article }) => {
    const [twitterLink, setTwitterLink] = useState('')

    useEffect(() => {
        setTwitterLink(`https://twitter.com/intent/tweet?text=${encodeURIComponent(window.location.href + "\n" + article.categories.map(categorie => "@" + categorie.name).join(" "))}`)
    }, [])

    return (
        <Styled.Container>
            <header>
                <Styled.Title>{article.title}</Styled.Title>
                <p>{Intl.DateTimeFormat('en', { dateStyle: 'full' }).format(new Date(article.createdAt))}</p>
            </header>
            <Styled.MainImg src={article.image.url} />
            <ReactMarkdown components={CodeBlock} rehypePlugins={[rehypeRaw]}>{article.content}</ReactMarkdown>

            <div>
                <Styled.Tags>
                    {article.categories.map(categorie => (<Link key={categorie.slug} href={`/categorie/${categorie.slug}`}><a>{categorie.name}</a></Link>))}
                </Styled.Tags>
            </div>

            <Styled.TwitterLink
                href={twitterLink}
                data-size="large" target="_blank">
                <TwitterIcon />
                Tweet this article
            </Styled.TwitterLink>

            <Styled.AuthorContainer>
                <Styled.AuthorImg src={article.author.photo.url} />
                <h2>{article.author.name} <span>{Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(article.author.createdAt))}</span></h2>

                <p>{article.author.bio}</p>
            </Styled.AuthorContainer>
        </Styled.Container>
    )
}

export default ArticleContent