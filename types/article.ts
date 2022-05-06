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