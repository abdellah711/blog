import ArticlesList from 'components/ArticlesList'
import type { GetStaticProps, NextPage } from 'next'
import { getRecentArticles } from 'services/articles'
import { IArticle } from 'types/article'

const Home: NextPage<HomePageProps> = ({articles}) => {

  return (
    <div>
      <ArticlesList articles={articles}/>
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
