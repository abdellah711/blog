import CategoriesList from 'components/Categories'
import Layout from 'components/Layout'
import RecentPosts from 'components/Sidebar/RecentPosts'
import { GetStaticProps, NextPage } from 'next'
import { getAllCategories } from 'services/categories'
import { IArticle } from 'types/article'
import { ICategorie } from 'types/categorie'


const categories: NextPage<CategoriesPageProps> = ({ recentArticles, categories }) => {
    return (
        <Layout
            title="Categories"
            sidebars={[
                <RecentPosts posts={recentArticles} key="recent-posts"/>
            ]}
        >
            <CategoriesList categories={categories}/>
        </Layout>
    )
}

interface CategoriesPageProps {
    categories: ICategorie[];
    recentArticles: IArticle[];
}

export const getStaticProps: GetStaticProps<CategoriesPageProps> = async () => {
    const { categories, recent } = await getAllCategories()
    return {
        props: {
            categories,
            recentArticles: recent
        }
    }
}

export default categories