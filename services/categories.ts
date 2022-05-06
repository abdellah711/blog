import { gql, request } from "graphql-request";


const GRAPHQL_URL = <string>process.env.NEXT_PUBLIC_GRAPHQL_URL

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