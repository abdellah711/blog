import { GRAPHQL_URL } from "config/variables";
import { gql, request } from "graphql-request";
import { IArticlesResponse } from "types/article";
import { ICategorieResponse } from "types/categorie";



export const getCategories = async () => {
    const query = gql`
        query {
            categories {
                name
                slug
                image {
                    url
                }
            }
        }
    `
    
    const resp = await request(GRAPHQL_URL,query)

    return resp.categories;

}

export const getAllCategories = async () => {
    const query = gql`
        query {
            categories {
                name
                slug
                image {
                    url
                }
            }
            recent: articles (first:5) {
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

    const resp = request<ICategorieResponse>(GRAPHQL_URL,query)
    return resp
}