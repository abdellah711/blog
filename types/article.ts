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
        photo: {
            url: string;
        }
    }
    categories: {
        name: string;
        slug: string;
        image: {
            url: string;
        }
    }

    comments: {
        name: string;
        content: string;
    }
}