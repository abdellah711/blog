import ArticlesList from 'components/ArticlesList'
import Layout from 'components/Layout'
import Pagination from 'components/Pagination'
import { CategoriesSidebar, RecentPostsSidebar } from 'components/Sidebar'
import type { GetStaticProps, NextPage } from 'next'
import { getRecentArticles } from 'services/articles'
import { IArticle } from 'types/article'

const Home: NextPage<HomePageProps> = ({articles}) => {

  return (
      <Layout
        title='Recent Articles'
        sidebars={[
          <CategoriesSidebar key="categories"/>,
          <RecentPostsSidebar posts={articles} key="recent-posts"/>,
        ]}
      >
        <ArticlesList articles={articles}/>
        <Pagination currentPage={1} totalPages={10}/>
      </Layout>
  )
}

export interface HomePageProps {
  articles: IArticle[]
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getRecentArticles();
  return {
    props: {
      articles,
    }
  }
}

export default Home
