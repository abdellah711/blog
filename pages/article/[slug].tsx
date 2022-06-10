import { ArticleContent, Comments } from "components/ArticleDetails"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { getArticleDetails } from "services/articles"
import { Container } from "styles/global.styled"
import { IArticleDetails } from "types/article"



const ArticlePage: NextPage<ArticleProps> = ({ article }) => {
    return (
        <>
        <Head>
            <title>Blog | {article.title}</title>
        </Head>
        <Container>
            <ArticleContent article={article}/>
            <Comments comments={article.comments} slug={article.slug}/>
        </Container>
        </>
    )
}

interface ArticleProps {
    article: IArticleDetails;
}

export const getServerSideProps: GetServerSideProps<ArticleProps> = async (ctx) => {
    const slug = ctx.params?.slug as string

    const article = await getArticleDetails(slug)

    return {
        props: {
            article
        }
    }
}

export default ArticlePage