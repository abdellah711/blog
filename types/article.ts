export interface IArticle {
    title: string;
    excerpt: string;
    slug: string;
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
}