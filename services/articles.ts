import { gql, request } from 'graphql-request'
import { IArticle } from 'types/article'

const GRAPHQL_URL = <string>process.env.NEXT_APP_GRAPHQL_URL

export const getRecentArticles = async () => {
    const query = gql`
        query {
            articles {
                title
                excerpt
                slug
                image {
                    url
                }

                author {
                    name
                    createdAt
                    photo {
                        url
                    }
                }
            }
        }
    `

    const resp = await request<{articles:IArticle[]}>(GRAPHQL_URL, query)
    return resp.articles;
}