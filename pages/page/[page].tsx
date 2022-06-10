import { GetServerSideProps, NextPage } from "next"
import ArticlesList from 'components/ArticlesList'
import Layout from 'components/Layout'
import Pagination from 'components/Pagination'
import { CategoriesSidebar, RecentPostsSidebar } from 'components/Sidebar'
import { getPageArticles } from 'services/articles'
import { IArticle } from 'types/article'
import { PAGE_ARTICLES_COUNT } from "config/variables"
import { ICategorie } from "types/categorie"
import Head from "next/head"


const BlogPage: NextPage<BlogPageProps> = ({ articles, recentArticles,categories, currentPage, totalPages,categorie }) => {
    return (
        <>
        <Head>
            <title>Blog {currentPage != 1 ? `| page ${currentPage}`: ''}</title>
        </Head>
        <Layout
            title={categorie ? `Categorie '${categorie}'`:'Recent articles'}
            sidebars={[
                <CategoriesSidebar key="categories" categories={categories}/>,
                <RecentPostsSidebar posts={recentArticles} key="recent-posts" />,
            ]}
        >
            <ArticlesList articles={articles} />
            <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl="/page/"/>
        </Layout>
            </>
    )
}

interface BlogPageProps {
    articles: IArticle[];
    currentPage: number;
    totalPages: number;
    recentArticles: IArticle[];
    categories: ICategorie[];
    categorie: string| null;
}

export const getServerSideProps: GetServerSideProps<BlogPageProps> = async (ctx) => {
    const page = ctx.params?.page
    const categorie = ctx.query?.c as string
    if (!page || page === '0')
        return { redirect: { permanent: false, destination: '/404' } }

    const { recent, articles,categories, articlesConnection: { aggregate: { count } } } = await getPageArticles(+page,categorie as string)

    return {
        props: {
            articles,
            currentPage: +page,
            recentArticles: recent,
            totalPages: Math.ceil(count / PAGE_ARTICLES_COUNT),
            categories,
            categorie: categorie ?? null
        }
    }
}


export default BlogPage