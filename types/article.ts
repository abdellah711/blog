export interface IArticle {
    title: string;
    excerpt: string;
    slug: string;
    createdAt: string;
    image: {
        url: string
    };
    author: {
        name: string;
        photo: {
            url: string;
        }
    }
}


export interface IArticlesResponse {
    articles: IArticle[];
    recent: IArticle[];
    articlesConnection: {
        aggregate: {
            count: number;
        }
    }
}

export interface IArticleDetails {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    image: {
        url: string
    };
    author: {
        name: string;
        createdAt: string;
        bio: string;
        photo: {
            url: string;
        }
    };
    categories: {
        name: string;
        slug: string;
        image: {
            url: string;
        }
    }[];

    comments: IComment[]
}

export interface IComment {
    id?:string;
    name: string;
    content: string;
    email?:string;
    createdAt?: string;
}