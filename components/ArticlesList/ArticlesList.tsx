import { FC } from "react";
import { IArticle } from "types/article"


interface Props {
    articles: IArticle[];
}

const ArticlesList: FC<Props> = ({ articles }) => {

    return (
        <div>
            {articles?.map(article => (<div key={article.slug}>{article.title}</div>))}
        </div>
    )
}

export default ArticlesList