import { FC } from "react";
import { IArticle } from "types/article"
import ArticleItem from "./ArticleItem";


interface Props {
    articles: IArticle[];
}

const ArticlesList: FC<Props> = ({ articles }) => {

    return (
        <div>
            {articles?.map(article => (<ArticleItem key={article.slug} article={article}/>))}
        </div>
    )
}

export default ArticlesList