import * as Styled from './styles'
import { FC } from 'react'
import { IArticle } from 'types/article';
import ArrowIcon from '../../assets/icons/arrow-right.svg'
import Link from 'next/link'


interface Props {
    article: IArticle;
}

const ArticleItem: FC<Props> = ({ article }) => {
    const articleLink = `/article/${article.slug}`

    return (
        <Styled.Card>
            <Link href={articleLink} passHref>
                <a style={{ gridRow: '3 span' }}><Styled.Image src={article.image.url} /></a>
            </Link>
            <Link href={articleLink} passHref>
                <a>
                    <h2>{article.title}</h2>
                </a>
            </Link>
            <div>
                <p>{article.excerpt}</p>
            </div>
            <Styled.Row>
                <img src={article.author.photo.url} width='50' height='50' />
                <Styled.Column>
                    <h3>{article.author.name}</h3>
                    <p style={{whiteSpace:'nowrap'}}>{Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(article.createdAt))}</p>
                </Styled.Column>
                <Link href={articleLink} passHref>
                    <Styled.Button as="a"><span>Read more</span> <ArrowIcon /></Styled.Button>
                </Link>
            </Styled.Row>
        </Styled.Card>
    )
}

export default ArticleItem