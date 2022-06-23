import * as Styled from './styles'
import { FC } from 'react'
import { IArticle } from 'types/article';
import ArrowIcon from '../../assets/icons/arrow-right.svg'
import Link from 'next/link'
import Image from 'next/image';


interface Props {
    article: IArticle;
    imgPriority?: boolean;
}

const ArticleItem: FC<Props> = ({ article, imgPriority }) => {
    const articleLink = `/article/${article.slug}`

    return (
        <Styled.Card>
            <Link href={articleLink} passHref>
                <Styled.ImageContainer>
                    <Image src={article.image.url} priority={imgPriority} layout="fill" sizes="(max-width: 700px) 90vw, (max-width: 1000px) 30vw, 400px" alt={article.title} objectFit="cover" />
                </Styled.ImageContainer>
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
                <Image src={article.author.photo.url} width='50' height='50' quality={100} alt="author image"/>
                <Styled.Column>
                    <h3>{article.author.name}</h3>
                    <p style={{ whiteSpace: 'nowrap' }}>{Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(article.createdAt))}</p>
                </Styled.Column>
                <Link href={articleLink} passHref>
                    <Styled.Button as="a"><span>Read more</span> <ArrowIcon /></Styled.Button>
                </Link>
            </Styled.Row>
        </Styled.Card>
    )
}

export default ArticleItem