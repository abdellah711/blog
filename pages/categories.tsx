import CategoriesList from 'components/Categories'
import Layout from 'components/Layout'
import RecentPosts from 'components/Sidebar/RecentPosts'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { getAllCategories } from 'services/categories'
import { IArticle } from 'types/article'
import { ICategorie } from 'types/categorie'


const categories: NextPage<CategoriesPageProps> = ({ recentArticles, categories }) => {
    return (
        <>
            <Head>
                <title>Blog | Categories</title>
            </Head>
            <Layout
                title="Categories"
                sidebars={[
                    <RecentPosts posts={recentArticles} key="recent-posts" />
                ]}
            >
                <CategoriesList categories={categories} />
            </Layout>
        </>
    )
}

interface CategoriesPageProps {
    categories: ICategorie[];
    recentArticles: IArticle[];
}

export const getServerSideProps: GetServerSideProps<CategoriesPageProps> = async () => {
    const { categories, recent } = await getAllCategories()
    return {
        props: {
            categories,
            recentArticles: recent
        }
    }
}

export default categories