import ArticlesList from 'components/ArticlesList'
import Layout from 'components/Layout'
import { CategoriesSidebar, RecentPostsSidebar } from 'components/Sidebar'
import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { searchForArticles } from 'services/articles'
import { IArticle } from 'types/article'



const SearchPage: NextPage<SearchProps> = ({ articles, searchQuery }) => {

    return (
        <Layout
            title={`Result of ' ${searchQuery} '`}
            sidebars={[
                <CategoriesSidebar key="categories" />,
                // <RecentPostsSidebar posts={articles} />,
            ]}
        >
            <ArticlesList articles={articles} />
        </Layout>
    )
}

interface SearchProps {
    articles: IArticle[];
    searchQuery: string;
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async (context) => {
    const query = context.query?.q as string
    const articles = query ? await searchForArticles(query) : []
    return {
        props: {
            articles,
            searchQuery: query ?? '',
        },
    }
}

export default SearchPage