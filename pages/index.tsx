import ArticlesList from 'components/ArticlesList'
import Layout from 'components/Layout'
import { CategoriesSidebar, RecentPostsSidebar } from 'components/Sidebar'
import type { GetStaticProps, NextPage } from 'next'
import { getRecentArticles } from 'services/articles'
import { IArticle } from 'types/article'

const Home: NextPage<HomePageProps> = ({articles}) => {

  return (
    <div>
      <Layout
        sidebars={[
          <CategoriesSidebar/>,
          <RecentPostsSidebar posts={articles}/>,
        ]}
      >
        <ArticlesList articles={articles}/>
      </Layout>
    </div>
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
