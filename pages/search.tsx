import ArticlesList from 'components/ArticlesList'
import Layout from 'components/Layout'
import Pagination from 'components/Pagination'
import { CategoriesSidebar, RecentPostsSidebar } from 'components/Sidebar'
import { PAGE_ARTICLES_COUNT } from 'config/variables'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { searchForArticles } from 'services/articles'
import { IArticle } from 'types/article'



const SearchPage: NextPage<SearchProps> = ({ articles, searchQuery, recentArticles, currentPage, totalPages }) => {

    return (
        <Layout
            title={`Result of ' ${searchQuery} '`}
            sidebars={[
                <CategoriesSidebar key="categories" />,
                <RecentPostsSidebar posts={recentArticles} key="recent-posts" />,
            ]}
        >
            <ArticlesList articles={articles} />
            <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl={`search?q=${encodeURIComponent(searchQuery)}&p=`} />
        </Layout>
    )
}

interface SearchProps {
    articles: IArticle[];
    recentArticles: IArticle[];
    searchQuery: string;
    totalPages: number;
    currentPage: number;
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async (context) => {
    const query = context.query?.q
    const page = +(context.query?.p ?? '1')
    if (!query)
        return { redirect: { permanent: false, destination: '/404' } }

    const { articles, recent, articlesConnection: { aggregate: { count } } } = await searchForArticles(query as string, page)
    return {
        props: {
            articles,
            recentArticles: recent,
            searchQuery: query as string,
            totalPages: Math.ceil(count / PAGE_ARTICLES_COUNT),
            currentPage: page,
        },
    }
}

export default SearchPage