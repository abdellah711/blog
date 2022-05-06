import * as Styled from './styles'
import { FC } from 'react'
import { IArticle } from 'types/article';
import ArrowIcon from '../../assets/icons/arrow-right.svg'

interface Props {
    article: IArticle;
}

const ArticleItem: FC<Props> = ({ article }) => {

    return (
        <Styled.Card>
            <Styled.Image src={article.image.url}/>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <Styled.Row>
                <img src={article.author.photo.url} width='50' height='50' />
                <Styled.Column>
                    <h3>{article.author.name}</h3>
                    <p>{Intl.DateTimeFormat('en', {dateStyle:'long'}).format(new Date(article.createdAt))}</p>
                </Styled.Column>
                <Styled.Button>Read more <ArrowIcon/></Styled.Button>
            </Styled.Row>
        </Styled.Card>
    )
}

export default ArticleItem