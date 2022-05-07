import { FC } from "react";
import { IArticle } from "types/article"
import ArticleItem from "./ArticleItem";
import * as Styled from './styles'

interface Props {
    articles: IArticle[];
}

const ArticlesList: FC<Props> = ({ articles }) => {

    return (
        <div>
            {
                articles?.length > 0 ?
                    articles.map(article => (<ArticleItem key={article.slug} article={article} />))
                    : (
                        <Styled.Empty>No articles found</Styled.Empty>
                    )
            }
        </div>
    )
}

export default ArticlesList