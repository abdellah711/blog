import { GRAPHQL_URL } from 'config/variables'
import { gql, request } from 'graphql-request'
import { IArticle, IArticleDetails } from 'types/article'


export const getRecentArticles = async () => {
    const query = gql`
        query {
            articles {
                title
                excerpt
                slug
                createdAt
                image {
                    url
                }

                author {
                    name
                    photo {
                        url
                    }
                }
            }
        }
    `

    const resp = await request<{ articles: IArticle[] }>(GRAPHQL_URL, query)
    return resp.articles;
}

export const searchForArticles = async (searchQuery: string) => {
    const query = gql`
        query ($search: String!){
            articles (where: {_search: $search}){
                title
                excerpt
                slug
                createdAt
                image {
                    url
                }

                author {
                    name
                    photo {
                        url
                    }
                }
            }
        }
    `

    const resp = await request<{ articles: IArticle[] }>(GRAPHQL_URL, query, { search: searchQuery })
    return resp.articles;
}


export const getArticleDetails = async (slug: string) => {
    const query = gql`
        query ($slug: String!){
            article (where: {slug : $slug}){
                title
                slug
                createdAt
                content
                
                image {
                    url
                }

                author {
                    name
                    bio
                    createdAt
                    photo {
                        url
                    }
                }

                categories {
                    name
                    slug
                    image {
                        url
                    }
                }

                comments {
                    name
                    content
                }
            }
        }
    `

    const resp = await request<{ article: IArticleDetails }>(GRAPHQL_URL, query, { slug })

    return resp.article
}