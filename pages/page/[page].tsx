import { GetServerSideProps, NextPage } from "next"
import ArticlesList from 'components/ArticlesList'
import Layout from 'components/Layout'
import Pagination from 'components/Pagination'
import { CategoriesSidebar, RecentPostsSidebar } from 'components/Sidebar'
import { getPageArticles } from 'services/articles'
import { IArticle } from 'types/article'
import { PAGE_ARTICLES_COUNT } from "config/variables"
import { ICategorie } from "types/categorie"


const BlogPage: NextPage<BlogPageProps> = ({ articles, recentArticles,categories, currentPage, totalPages }) => {
    return (
        <Layout
            title='Recent Articles'
            sidebars={[
                <CategoriesSidebar key="categories" categories={categories}/>,
                <RecentPostsSidebar posts={recentArticles} key="recent-posts" />,
            ]}
        >
            <ArticlesList articles={articles} />
            <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl="/page/"/>
        </Layout>
    )
}

interface BlogPageProps {
    articles: IArticle[];
    currentPage: number;
    totalPages: number;
    recentArticles: IArticle[];
    categories: ICategorie[];
}

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async (ctx) => {
    const page = ctx.params?.page
    const categorie = ctx.query?.c
    if (!page || page === '0')
        return { redirect: { permanent: false, destination: '/404' } }

    const { recent, articles,categories, articlesConnection: { aggregate: { count } } } = await getPageArticles(+page,categorie as string)

    return {
        props: {
            articles,
            currentPage: +page,
            recentArticles: recent,
            totalPages: Math.ceil(count / PAGE_ARTICLES_COUNT),
            categories 
        }
    }
}


export default BlogPage