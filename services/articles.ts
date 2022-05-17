import { GRAPHQL_TOKEN, GRAPHQL_URL, PAGE_ARTICLES_COUNT } from 'config/variables'
import { gql, request, GraphQLClient } from 'graphql-request'
import { IArticle, IArticleDetails, IArticlesResponse, IComment } from 'types/article'


export const getPageArticles = async (page: number) => {
    const skip = (page - 1) * PAGE_ARTICLES_COUNT
    const query = gql`
        query ($skip: Int!, $first: Int!){
            articles (skip: $skip, first: $first) {
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
            recent: articles (first: 7) {
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
            articlesConnection{
                aggregate {
                    count
                }
            }
        }
    `
    const resp = await request<IArticlesResponse>(GRAPHQL_URL, query, { skip, first: PAGE_ARTICLES_COUNT })
    return resp
}


export const searchForArticles = async (searchQuery: string, page = 1) => {
    const skip = (page - 1) * PAGE_ARTICLES_COUNT
    const query = gql`
        query ($search: String!,$first: Int!, $skip:Int!){
            articles (where: {_search: $search}, skip:$skip, first:$first){
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
            recent: articles (first: 5) {
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

            articlesConnection(where: {_search: $search}){
                aggregate {
                    count
                }
            }
            
        }
    `

    const resp = await request<IArticlesResponse>(GRAPHQL_URL, query, { search: searchQuery, skip, first: PAGE_ARTICLES_COUNT })
    return resp
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
                    id
                    name
                    content
                    createdAt
                }
            }
        }
    `

    const resp = await request<{ article: IArticleDetails }>(GRAPHQL_URL, query, { slug })

    return resp.article
}

export const submitComment = async (comment: IComment & { slug: string }) => {
    const query = gql`
        mutation ($name: String!, $email: String!, $content: String!,$slug:String!) {
            createComment(data: {name: $name, email:$email, content:$content,article:{connect: {slug:$slug}}}) {id}
        }
    `
    const client = new GraphQLClient(GRAPHQL_URL, {
        headers: {
            authorization: `Bearer ${GRAPHQL_TOKEN}`
        }
    })

    await client.request(query, comment)

}
