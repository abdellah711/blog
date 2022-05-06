import ArticlesList from 'components/ArticlesList'
import ArticleItem from 'components/ArticlesList/ArticleItem'
import Layout from 'components/Layout'
import type { GetStaticProps, NextPage } from 'next'
import { getRecentArticles } from 'services/articles'
import { IArticle } from 'types/article'

const Home: NextPage<HomePageProps> = ({articles}) => {

  return (
    <div>
      <Layout sidebar={[
        <p>Categories</p>,
        <p>Recent posts</p>,
      ]}>
        <ArticlesList articles={articles}/>
        {/* <div>
          {Array.from({length:100},(_,i) => <ArticleItem key={i} article={articles[0]}/>)}
        </div> */}
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
