import { IArticle } from "./article";

export interface ICategorie {
    name: string;
    slug: string;
    image: {
        url: string;
    }
}

export interface ICategorieResponse {
    categories: ICategorie[];
    recent: IArticle[];
}