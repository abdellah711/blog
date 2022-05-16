import { GetServerSideProps, NextPage } from "next"
import ArticlesList from 'components/ArticlesList'
import Layout from 'components/Layout'
import Pagination from 'components/Pagination'
import { CategoriesSidebar, RecentPostsSidebar } from 'components/Sidebar'
import { getPageArticles, getRecentArticles } from 'services/articles'
import { IArticle } from 'types/article'
import { PAGE_ARTICLES_COUNT } from "config/variables"


const BlogPage: NextPage<BlogPageProps> = ({ articles, recentArticles, currentPage, totalPages }) => {
    return (
        <Layout
            title='Recent Articles'
            sidebars={[
                <CategoriesSidebar key="categories" />,
                <RecentPostsSidebar posts={recentArticles} key="recent-posts" />,
            ]}
        >
            <ArticlesList articles={articles} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </Layout>
    )
}

interface BlogPageProps {
    articles: IArticle[];
    currentPage: number;
    totalPages: number;
    recentArticles: IArticle[];
}

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async (ctx) => {
    const page = ctx.query?.page
    if (!page || page === '0')
        return { redirect: { permanent: false, destination: '/404' } }

    const { recent, articles, articlesConnection: { aggregate: { count } } } = await getPageArticles(+page)

    return {
        props: {
            articles,
            currentPage: +page,
            recentArticles: recent,
            totalPages: Math.ceil(count / PAGE_ARTICLES_COUNT)
        }
    }
}


export default BlogPage